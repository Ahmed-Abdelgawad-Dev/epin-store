import React, { Component } from "react";
import { detailProduct, getStoreProducts, updateStoreProduct } from "./data";
const Context = React.createContext();
class Provider extends Component {
  state = {
    loading: true,
    currency: "USD",
    AED: 3.75,
    screen: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
    tags: [],
    categories: [],
    /**
     * @type {import('./types').storeProduct[]}
     */
    root_store: [],
    /**
     * @type {import('./types').storeProduct[]}
     */
    store: [], // all products in main screen
    detailProduct, // selected product object
    cart: [], // cart products

    filters: {
      q: "",
      category: "",
      tags: "",
      sort: "",
    },
    // only cart logic
    cartsubtotal: 0,
    cartTax: 0,
    carttotal: 0,
    //popup modal
    modal: {
      hidden: true,
      title: "Terms of Service",
      body: `
      With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
      The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.`,
      success: {
        text: "Agree",
        onClick: () => console.log("agree clicked"),
      },
      decline: {
        text: "Decline",
        onClick: (e) => this.closeModal(),
      },
    },
  };
  changeCurrency = (currency) => {
    this.setState({ currency });
  };
  componentDidMount() {
    window.addEventListener("resize", (e) => {
      this.setState({
        screen: {
          width: window.innerWidth,
          height: window.innerHeight,
        },
      });
    });
    this.setStore(); // load store products form data provider ( local - firebase ...etc)
  }
  // add data to this.state.store function
  setStore = () => {
    getStoreProducts().then(({ data: root_store, tags, categories, AED }) => {
      root_store = root_store.map((st) => ({
        ...st,
        // extra product data that needed locally
        inCart: false,
        count: 0,
        total: 0,
      }));
      this.setState(
        () => {
          return {
            root_store,
            store: root_store,
            detailProduct: root_store[0],
            tags,
            categories,
            AED,
          };
        },
        () => {
          this.setLoading(false);
        }
      );
    });
  };
  /**
   * get item by id
   */
  getItem = (id) => {
    const item = this.state.root_store.find((item) => item.id === id);
    return item;
  };
  /**
   * update details screen product data by id
   */
  hadelDetails = (id) => {
    const target = this.getItem(id);
    if (!target) {
      throw new Error(`couldn't find product with id ${id}`);
    }
    this.setState(() => {
      return { detailProduct: target };
    });
    return target;
  };
  /**
   * add item to cart
   */
  addToCart = (id, count = 1) => {
    let tempStore = [...this.state.store];
    const index = tempStore.indexOf(this.getItem(id));
    const listItem = tempStore[index];
    listItem.inCart = true;
    listItem.count = count;
    listItem.total = parseFloat((listItem.price * count).toFixed(2));
    this.setState(
      () => {
        return { store: tempStore, cart: [...this.state.cart, listItem] };
      },
      () => {
        this.addTototal();
      }
    );
  };
  /**
   * create order
   * @param {import('./types').order} order
   */
  checkout = async (order) => {
    let tempStore = [...this.state.root_store];
    const orderItems = [];
    for (const { product_id: id, serials } of order.products) {
      const index = tempStore.indexOf(this.getItem(id));
      /**
       * @type {import('./types').storeProduct}
       */
      const listItem = tempStore[index];
      orderItems.push(listItem);
      listItem.serials = listItem.serials.filter((s) => !serials.includes(s));
    }
    return updateStoreProduct(order, orderItems); // when data updated the data get refetch from the api
  };
  /**
   * @param {import('./types').ContextState['filters']} filters
   */
  applyFilters = (filters) => {
    filters = { ...this.state.filters, ...filters };
    const temp_store = [...this.state.root_store].filter((item) => {
      const hasQ =
        filters.q !== "" &&
        (item.title.includes(filters.q) ||
          item.description.includes(filters.q));
      const hasCategory = filters.category.includes(item.category);
      const hasTag = filters.tags.some((t) => item.tags.includes(t));

      return hasQ || hasCategory || hasTag;
    });

    this.setState(() => {
      return { filters, store: temp_store };
    });
  };
  // ------------------------------------------------------------------------//
  // ----------------------------cart functionality--------------------------//
  // ------------------------------------------------------------------------//

  /**
   * change item count at cart
   */
  changCount = (id, type) => {
    let tempStore = [...this.state.cart];
    const index = tempStore.indexOf(tempStore.find((item) => item.id === id));
    if (type === "add") {
      tempStore[index].count += 1;
      tempStore[index].total = tempStore[index].count * tempStore[index].price;
    } else if (type === "dec") {
      if (tempStore[index].count === 1) {
        this.deleteItem(id);
        return;
      } else {
        tempStore[index].count -= 1;
        tempStore[index].total =
          tempStore[index].count * tempStore[index].price;
      }
    }
    this.setState({ cart: tempStore }, () => {
      this.addTototal();
    });
  };
  /**
   * delete item from cart
   */
  deleteItem = (id) => {
    let tempStore = [...this.state.cart];
    tempStore = tempStore.filter((item) => {
      if (item.id !== id) {
        return true;
      } else {
        item.inCart = false;
        item.count = 0;
        item.total = 0;
        return false;
      }
    });
    this.setState({ cart: tempStore }, () => {
      this.addTototal();
    });
  };
  /**
   * clear cart items
   */
  clearCart = () => {
    this.setState({ cart: [] }, () => {
      this.setStore();
      this.addTototal();
    });
  };
  /**
   * calculate the total
   */
  addTototal = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const tempTax = 0;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = parseFloat((subTotal + tax).toFixed(2));
    console.log('Cart Total Amount: ',total);
    this.setState(() => {
      return {
        cartsubtotal: subTotal,
        cartTax: tax,
        carttotal: total,
      };
    });
  };

  //----------------------------------------------------------------------//
  //------------------------------ Modal ---------------------------------//
  //----------------------------------------------------------------------//
  closeModal = () => {
    this.setState({ modal: { ...this.state.modal, hidden: true } });
  };
  /**
   * @param {import('./types').ContextState['modal']} modal
   */
  setModal = (modal) => {
    this.setState({ modal });
  };

  //----------------------------------------------------------------------//
  //------------------------------ Loading -------------------------------//
  //----------------------------------------------------------------------//

  setLoading = (loading = true) => {
    this.setState({ loading });
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          hadelDetails: this.hadelDetails,
          addToCart: this.addToCart,
          changCount: this.changCount,
          deleteItem: this.deleteItem,
          clearCart: this.clearCart,
          checkout: this.checkout,
          closeModal: this.closeModal,
          setModal: this.setModal,
          setLoading: this.setLoading,
          changeCurrency: this.changeCurrency,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
// Consumer
const { Consumer } = Context;
export { Provider, Consumer, Context };
