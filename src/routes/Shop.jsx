import React, { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import { Context } from "../ContextApi";
import { useSearchParams } from "react-router-dom";
import debouns from "../lodash/debouns";
const enumParams = {
  tags: "tags",
  categories: "cat",
  q: "q",
};
const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  /**
   * @type {import('../types').ContextState}
   */
  const {
    store,
    tags,
    categories,
    screen: { width },
    filters,
    applyFilters,
  } = useContext(Context);
  const [locacStore, setLocalStore] = useState(store);
  const handelTag = (add, tag) => {
    setSearchParams((prev) => {
      const tag_params = prev.get(enumParams.tags) ?? "";

      if (add) {
        prev.set(enumParams.tags, tag_params + tag + ",");
      } else {
        const tag_params = prev.get(enumParams.tags);
        prev.set(enumParams.tags, tag_params.replace(tag + ",", ""));
      }
      return prev;
    });
  };
  const handelCategory = (add, cat) => {
    setSearchParams((prev) => {
      const cat_params = prev.get(enumParams.categories) ?? "";

      if (add) {
        prev.set(enumParams.categories, cat_params + cat + ",");
      } else {
        const cat_params = prev.get(enumParams.categories);
        prev.set(enumParams.categories, cat_params.replace(cat + ",", ""));
      }
      return prev;
    });
  };
  const filter = debouns(() => {
    setLocalStore(
      store.filter((i) => {
        const search_cat =
          searchParams.get(enumParams.categories)?.replace(/,/g, "") ?? "";
        const search_tags =
          searchParams.get(enumParams.tags)?.replace(/,/g, "") ?? "";
        const search_q = searchParams.get(enumParams.q) ?? "";
        return (
          (search_cat.includes(i.category) || !search_cat.trim()) &&
          (i.tags.some((t) => search_tags.includes(t)) ||
            !search_tags.trim()) &&
          i.title.toLowerCase().includes(search_q)
        );
      })
    );
  }, 800);
  useEffect(filter, [searchParams]);
  useEffect(() => {}, [locacStore]);
  return (
    <>
      <div className="container py-4 flex items-center gap-3">
        <a href="../index.html" className="text-primary text-base">
          <i className="fa-solid fa-house"></i>
        </a>
        <span className="text-sm text-gray-400">
          <i className="fa-solid fa-chevron-right"></i>
        </span>
        <p className="text-gray-600 font-medium">Shop</p>
      </div>
      <div className="container grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
        {/* <!-- sidebar --> */}
        {width > 500 && (
          <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden">
            <div className="divide-y divide-gray-200 space-y-5">
              <div>
                <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((c) => {
                    return (
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          name="cat-1"
                          id="cat-1"
                          checked={
                            !!searchParams
                              .get(enumParams.categories)
                              ?.includes(c)
                          }
                          className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                          onChange={(e) => {
                            const checked = e.target.checked;
                            handelCategory(checked, c);
                          }}
                        />
                        <label
                          for="cat-1"
                          className="text-gray-600 capitalize ml-3 text-sm cursor-pointer"
                        >
                          {c.replace(/_/g, " ")}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                  Tags
                </h3>
                <div className="space-y-2">
                  {tags.map((t) => {
                    return (
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          name="brand-1"
                          id="brand-1"
                          checked={
                            !!searchParams.get(enumParams.tags)?.includes(t)
                          }
                          className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                          onChange={(e) => {
                            const checked = e.target.checked;
                            handelTag(checked, t);
                          }}
                        />
                        <label
                          for="brand-1"
                          className="text-gray-600 ml-3 cusror-pointer"
                        >
                          {t}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* <div className="pt-4">
                <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                  Price
                </h3>
                <div className="mt-4 flex items-center">
                  <input
                    type="text"
                    name="min"
                    id="min"
                    className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                    placeholder="min"
                  />
                  <span className="mx-3 text-gray-500">-</span>
                  <input
                    type="text"
                    name="max"
                    id="max"
                    className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                    placeholder="max"
                  />
                </div>
              </div> */}
            </div>
          </div>
        )}
        {/* <!-- ./sidebar --> */}

        {/* <!-- products --> */}
        <div className={width <= 500 ? "col-span-5" : "col-span-3"}>
          {/*           
          <div className="flex items-center mb-4">
            <select
              name="sort"
              id="sort"
              className="w-44 text-sm text-gray-600 py-3 px-4 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary"
            >
              <option value="">Default sorting</option>
              <option value="price-low-to-high">Price low to high</option>
              <option value="price-high-to-low">Price high to low</option>
              <option value="latest">Latest product</option>
            </select>

            <div className="flex gap-2 ml-auto">
              <div className="border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer">
                <i className="fa-solid fa-grip-vertical"></i>
              </div>
              <div className="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer">
                <i className="fa-solid fa-list"></i>
              </div>
            </div>
          </div>
 */}
          <div
            className={`grid ${
              width <= 500 ? "grid-cols-2" : "grid-cols-4"
            } gap-6`}
          >
            {locacStore.map((item) => (
              <Card product={item} titleHight="5rem" />
            ))}
          </div>
        </div>
        {/* <!-- ./products --> */}
      </div>
    </>
  );
};

export default Shop;
