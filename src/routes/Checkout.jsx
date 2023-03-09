import { orderBy, serverTimestamp } from "@firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pay from "../components/payment";
import Spinner from "../components/spinner";
import { Context } from "../ContextApi";
const Policy = `
1.Introduction

Online E-pin global Limited with its registered office at Dubai tower, Ras El-Khor industrial 3, Office 46-01-SHR. Esenyurt and from time to time, its subsidiaries (together the “Group”) recognise their responsibilities in relation to the collection, holding, processing, use and/or transfer of personal data under the Personal Data (Privacy) Ordinance (Cap. 486) (“PDPO”) and under the General Data Protection Regulation (“GDPR”), [with regard to offering services to persons in the European Union]. Personal data will be collected only for lawful and relevant purposes and all practicable steps will be taken to ensure that personal data held by us is accurate. We will use your personal data which we may from time to time collect in accordance with this Privacy Policy.

We regularly review this Privacy Policy and may from time to time revise it or add specific instructions, policies and terms. Where any changes to this Privacy Policy are material, we will notify you using the contact details you have provided us with and, where required by the law, we will give you the opportunity to opt out of these changes by means notified to you at that time. Otherwise, in relation to personal data supplied to us through the online E-pin global website or otherwise, continued use by you of the online E-pin website, or other products or services of the Group, or your continued relationship with us or the Group shall be deemed to be your acceptance of and consent to this Privacy Policy, as amended from time to time.

online E-pin Limited and regard to its respective obligations and your rights under the GDPR and according to agreement on co-controlling is responsible for exercising your rights described below.

If you have any questions about this Privacy Policy or how we use your personal data, please contact us through one of the communication channels set out in the “Contact Us” section below.

online E-pin global will take all practicable steps to ensure the security of your personal data and to avoid unauthorised or accidental access, erasure or other use of your personal data. This includes physical, technical and procedural security methods, where appropriate, to ensure that your personal data may only be accessed by authorised personnel. 

Please note that if you do not provide us with your personal data (or relevant personal data relating to persons appointed by you to act on your behalf) we may not be able to provide the information, products or services you have asked for or be able to process your requests. Where we need your personal data to enter into or perform a contract, we will mark the required information with an asterisk]. In some cases you may be legally obliged to provide your personal data – we will indicate this when collecting the data.




2. Purposes and legal bases for processing .

From time to time we may collect your personal data including but not limited to your name, mailing address, telephone number, email address, date of birth, payment instrument and transaction details and unique identifiers assigned to you for the following purposes:

Purpose & Legal basis for processing

1 - To provide you with our products and services and administer your account in relation to such products and services, in particular to process your transaction, subscriptions and registration for our products and services – in accordance with your agreements with us .

- Entering into and performing a contract .

2 - To process your transaction, subscriptions and registration for products and services of third-parties .

- Entering into and performing a contract .

3 - To detect, investigate and prevent fraud, to maintain the security of our systems, to protect our property and safety as well as property and safety of our employees .

- Legitimate interests .

4 - To conduct research and statistical analysis in order to improve and develop our business, products and services .

- Legitimate interests To provide you marketing information about our Group products and services as well as relevant third-party products and services .

5 - by using direct marketing .

- Consent .

6 - · by adapting our websites, offers and advertising to your interests .

- Consent .

7 -  by other means, such as advertising on websites .

- Legitimate interests .

8 - To comply with applicable EU laws and regulations, in particular regulatory and anti-money laundering obligations .

- Compliance with a legal obligation .

9 - To comply with applicable non-EU laws and regulations, in particular regulatory and anti-money laundering obligations .

- Legitimate interests .

10 - To protect our rights and the rights of our employees .

- Legitimate interests .

(From time to time we may also collect personal data from other sources that the data subject – for example when we identify beneficial owners within AML process or if you provide us personal data of other persons. In many cases providing information included in this policy to such persons proves impossible or would involve a disproportionate effort. We appreciate if you may help us to be transparent to such persons on processing of their data. Such data are not used for marketing purposes.)





3. Direct Marketing . 
Where you have given your consent and have not subsequently opted out, we may also use your name, mailing address, telephone number and email address to send promotional materials to you and conduct direct marketing activities in relation to online E-pin global products and services, and products services offered by other members of the Group, or products and services offered by relevant third-parties.

If you do not wish to receive any promotional and direct marketing materials or do not wish to receive specific types of promotional and direct marketing materials or do not wish to receive such materials through a specific means of communication, you can unsubscribe or change your settings by clicking the link provided in the marketing materials you receive. You can also unsubscribe or contact us through one of the communication channels set out in the “Contact Us” section below.

Where you have given your consent and have not subsequently opted out, we may also collect information about what is watched and bought by you, at what price, in what amount or whether did you add specific products to the cart but did not buy them and use it to create a profile of your interests on the basis of content that we think was interesting for you (for example because you added it to the cart) as well as content that other users similar to you have found engaging. By using [this profile of your interests we can adapt our marketing materials by replacing the default content with content more relevant to your interests (for example we can show you games or other products that we think you might like instead of the default offers).





4. Recipients of the personal data .
We may transfer your personal data to the following categories of recipients:

- other users of our products and services where this is necessary to perform our agreements with you, for example when you purchase a game from a seller on the online E-pin global Marketplace .


- other members of the Group;


- agents, contractors, advisors or third parties who provide administrative, telecommunications, computer, payment, debt collection, data processing, legal or other services to online E-pin global .


- financial institutions, payment service providers (such as banks, payment institutions or electronic money institutions) as well as card organizations (such as VISA or MasterCard) – in connection with our payment services. 


- persons and institutions that are allowed to request your personal data under applicable laws and regulations through a court order, subpoena or other legal process, such as supervisory bodies, regulators or law enforcement bodies
other parties as notified to you at the time of collection.


- online E-pin global operates internationally. If personal data is transferred from European Union outside European Economic Area, we make sure that adequate level of personal data protection is assured, for example by signing standard contractual clauses for transfer of data.




5. How We Use Cookies
- If you access our information or services through the online E-pin global website, you should be aware that cookies are used. Cookies are data files stored on your browser. If you have accepted cookies by using tools displayed when entering the online E-pin global website, the website automatically installs and uses them on your browser when you access it. We may also use cookies without your consent where it is strictly necessary to provide our services and you have explicitly requested them, such as [maintaining your session when you have logged in to your account or remembering the contents of your cart]. You can also change your settings for cookies on our websites using the tool below:

- Cookies are used for the following purposes:

- For statistical purposes through [analysis of aggregate data on traffic and manner of use of our websites]
- We create statistics that help us understand how you access online E-pin global, which allows us to improve the structure of online E-pin global and its content and thus improve your experience;

- Creating a profile for you in order to display matching materials in regard to advertising networks, such as the Google Display Network;
- To run statistics on traffic to reliably conduct settlements with advertising partners;
- To remember your settings between browsing sessions and customize the Site to better suit your needs and preferences, such as selecting the display language or currency.
- For marketing purposes, also on the basis of automated processing containing profiling elements, in particular, for [adaptation of our websites, offers and advertising to your interests]
- We use cookies to [assign you an unique identifier that lets us collect information about your actions on our website, viewed content and your use of our products and services]. We then use this information to [create a profile of your interests on the basis of content that we think was interesting for you (for example because you viewed it for a certain period of time, searched for certain types of games or added some products to your cart) as well as content that other users similar to you have found engaging]. By using [this profile of your interests we can adapt our websites, offers and advertising to your needs by replacing the default content with content more relevant to your interests (for example we can show you games that we think you might like instead of the default game categories or personalize the newsletter to which you subscribed)].

- To achieve the above goals, the Site uses two basic types of cookies, session cookies and persistent cookies. Session cookies are temporary files that are stored in your browser until you logout, leave the website or close the browser. Persistent cookies are stored in your browser for a longer period of time, as specified in the parameters of the cookie or until you remove the cookie.

- Cookies may be used by partners and advertising networks, such as the Google Display Network to display ads specific to you and in accordance your preferences while using online E-pin global. To achieve this goal cookies may store information about your navigation path or the time you spent on online E-pin global. To see what information was collected about you by the Google Display Network, you can view and edit the information derived from cookies with the following tool provided by Google: https://www.google.com/ads/preferences/ .

- Your browser’s default setting is likely set to allow for the storage of cookies. You can change your browser’s settings and delete or prevent cookies. For details, consult your browser’s documentation. Please note that if you do so you may not be able to utilise or activate certain functions available on online E-pin global.

- The list of specific cookies that we use, their purposes, typical parameters and storage period is available below .


(Cookies type  &  Description)


1-

General information .

Cookies are small text files, send by the Internet shop and stored on your computer, containing some information connected with your usage of the Website and the Internet shop. Cookies files are used by the Internet shop, in order to provide services for the Website and make it possible to make interesting information available during the purchasing procedure, remembering your purchase for example.

Cookies files used by the Internet shop can be of temporal or constant character. Temporary cookies are eliminated when you exit your browser, whereas permanent cookies which are stored beyond the end of the browsing session are used to store information such as your password or login, for an easier and faster usage of the Website. In any case, you may block the cookies installation process or delete permanent cookies using the appropriate options in your web browser. In the event of any problems, we suggest to use the web browser’s help file or we advise to contact the web browser producer directly.


2-

Necessary .

Cookies files are necessary for a comfortable use of the site, they allow enabling basic functions such as website navigation or secure web access. Website cannot function properly without cookies.


3-

Preferences .

Those cookies files which store your preferences enable the website to remember information connected with functioning and layout of the website, such as preferred language or user’s current position.


4-

Statistics .

Cookies used for statistical purposes help website owners to understand how different users behave on the website by collecting and reporting anonymous information.

5-

Marketing .

Marketing cookie files are used to track users on websites. Their main purpose is to display ads that are relevant and interesting for individual users and therefore more valuable to third-party publishers and advertisers.



6. Retention of data
We will retain your personal data for as long as we have lawful grounds to do so. Specific retention periods depend on the purpose and legal base of processing, for example:

- personal data required to provide services, for the time of providing such services and after that, for the time required by legal provisions (e.g. on accountancy) or to handle possible claims

- personal data that must have been collected for anti-money laundering legislation requirements, including for identification, screening and reporting, as a rule for 5 years after the termination of our relationship or after the date of an occasional transaction, unless we are required to retain this information for the purposes of court or administrative proceedings,

- personal data processed on the basis of your consent, as a rule until such consent is withdrawn

- personal data processed on the basis of a legitimate interest, as a rule until you file an effective objection.


7. Access and Correction of Personal Data
Under the PDPO, you have the right to verify whether we hold your personal data, to obtain a copy of the data, and to correct any data that is inaccurate. You may also request us to inform you of the type of personal data held by us. All data access requests shall be made using the form prescribed by the Privacy Commissioner for Personal Data (“Privacy Commissioner”) which may be found on the official website of the Office of the Privacy Commissioner or via this link: https://www.pcpd.org.hk/english/publications/files/Dforme.pdf

Requests for access and correction of personal data or for information regarding policies and practices and the kinds of data held by us should be addressed in writing and sent by post to us (see the “Contact Us” section below).

A reasonable fee may be charged to offset our administrative and actual costs incurred in complying with your data access requests.


8. Your rights under the GDPR
Pursuant to the GDPR you also have the following rights:

- Right to be informed, which is satisfied through this notice.

- Right to erasure. You have the right to have your data erased and no longer processed if the personal data are no longer necessary in relation to the purposes for which they were collected or otherwise processed, if consent was withdrawn or objection was filed and there are no other legal basis for processing. If we have disclosed the personal data in question to third parties, we will inform them about the erasure of the personal data, unless it is impossible or involves disproportionate effort to do so.

- Right to restriction on processing. If there are grounds for restriction on processing, for example if you contest the accuracy of your personal data, it will be stored and processed otherwise only if you consent or to exercise legal claims, or for the protection of rights of another natural or legal person. If we have disclosed the personal data in question to third parties, we will inform them about the restriction on the processing of the personal data, unless it is impossible or involves disproportionate effort to do so. We will inform you before the restriction is lifted.

- Right to objection to processing. You have the right to object to processing based on legitimate interests (including profiling) and direct marketing (including profiling). We will no longer process you data, unless we have compelling legitimate grounds for processing or we need to process the data for the establishment, exercise or defense of legal claims.

- Right to portability. You have the right to receive personal data that you provided to us in a structured, commonly used and machine-readable format and to transmit those data to another data controller.

You may contact us to exercise your rights through “Contact us” section below.

- Right to lodge a complaint with a supervisory authority. If you are unhappy about the way we process personal data you may contact us and, if you are unsatisfied with our answer, file a complaint to data protection authority in [Turkey] or in your country.


9. General
If this Privacy Policy is translated into any other language, and there is any inconsistency or conflict between the English and translated versions of this Privacy Policy, the English version shall prevail.


10. refund policy

online E-pin global reserves the right to refuse to issue a replacement or refund if in online E-pin global sole discretion online E-pin global detects that a User has engaged in fraud, deception or abuse of the online E-pin global. Moreover, in the event that online E-pin global detects a User has engaged in fraud, deceit or abuse of the store (online E-pin global) due to that all products in the store are digital and non refundable .


Contact us *

*email: support@epin-store.com

*phone Number : +971 50 690 6157

*whatsapp: +971 50 690 6157
`;
const Checkout = () => {
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [agree, setAgree] = useState(false);

  const clearState = () => {
    setEmail("");
    setFirstName("");
    setLastName("");
    setAgree(false);
  };
  /**
   * @type {import('../types').ContextState}
   */
  const {
    currency,
    AED,
    cart,
    carttotal,
    screen: { width },
    modal,
    closeModal,
    setModal,
    deleteItem,
  } = useContext(Context);

  /**
   * display policy to the customer
   */
  const handelPolicy = () => {
    setModal({
      hidden: false,
      body: Policy,
      title: "terms & conditions",
      success: {
        text: "Accept",
        onClick: () => {
          setAgree(true);
          closeModal();
        },
      },
      decline: {
        onClick: () => {
          setAgree(false);
          closeModal();
        },
        text: "Decline",
      },
    });
  };
  // validation form -----------------------------------------------------------
  const email_regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [validForm, setValidForm] = useState(false);
  const isValid = () => {
    if (
      email_regex.test(email) &&
      agree &&
      !!first_name &&
      !!last_name &&
      cart.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  };
  /**
   * display the model with the validation errors in form
   * ex.
   * email is not valid email
   */
  const ShowModelForErrors = () => {
    setModal({
      ...modal,
      hidden: false,
      title: "Checkout Order",
      body: `
    ${!agree ? "you need to agree to terms of services" : ""}
    ${!first_name ? "First Name is required" : ""}
    ${!last_name ? "Last name is required" : ""}
    ${!email_regex.test(email) ? "you need to enter valid email" : ""}
    ${cart.length <= 0 ? "you can't make empty order" : ""} 
    `,
      success: {
        text: "OK",
        onClick: (e) => {
          closeModal();
        },
      },
    });
  };
  useEffect(() => {
    setValidForm(isValid());
  }, [first_name, last_name, agree, email]);
  // end validation form -------------------------------------------------------

  const deleteItemFromCart = (id) => {
    deleteItem(id);
  };
  return (
    <>
      <div className="container py-4 flex items-center gap-3">
        <Link to="/" className="text-primary text-base">
          <i className="fa-solid fa-house"></i>
        </Link>
        <span className="text-sm text-gray-400">
          <i className="fa-solid fa-chevron-right"></i>
        </span>
        <p className="text-gray-600  font-medium">Checkout</p>
      </div>
      <div
        className={`container grid ${
          width <= 500 ? "grid-rows-12" : "grid-cols-12"
        } items-start pb-16 pt-4 gap-6`}
      >
        <div className="col-span-8 border border-gray-200 p-4 rounded">
          <h3 className="text-lg font-medium capitalize mb-4">Checkout</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="first-name" className="text-gray-600">
                  First Name <span className="text-primary">*</span>
                </label>
                <input
                  value={first_name}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="input-box"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="text-gray-600">
                  Last Name <span className="text-primary">*</span>
                </label>
                <input
                  value={last_name}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  name="last-name"
                  id="last-name"
                  className="input-box"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="text-gray-600">
                Email address
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value.toLowerCase())}
                type="email"
                name="email"
                id="email"
                className="input-box"
              />
            </div>
          </div>
        </div>

        <div
          className={`${
            width <= 500 ? "col-span-8" : "col-span-4"
          } border border-gray-200 p-4 rounded`}
        >
          <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
            order summary
          </h4>
          <div className="space-y-2">
            {cart.map((product, idx) => {
              return (
                <div
                  key={idx.toString()}
                  className="checkout-item grid grid-flow-col gap-2 "
                >
                  <div className=" checkout-item-title">
                    <h5 className="text-gray-800 font-medium text-xs">
                      {product.title}
                    </h5>
                  </div>
                  <p className="text-gray-800 font-small text-sm">
                    {currency == "AED" ? product.price * AED : product.price}
                  </p>
                  <p className="text-gray-600">x{product.count}</p>
                  {currency == "AED" ? (
                    <p className="text-gray-800 font-small text-sm">
                      AED {(product.price * AED * product.count).toFixed(2)}
                    </p>
                  ) : (
                    <p className="text-gray-800 font-small text-sm">
                      $ {(product.price * product.count).toFixed(2)}
                    </p>
                  )}
                  <div
                    className="text-red-600 hover:bg-red-100 rounded-full text-center cursor-pointer"
                    onClick={() => deleteItemFromCart(product.id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-between text-gray-800 font-medium py-3 uppercas">
            <p className="font-semibold text-red-700">Total</p>
            {currency === "USD" ? (
              <p className="text-red-600">$ {carttotal}</p>
            ) : (
              <p className="text-red-600">AED {carttotal * 3.75}</p>
            )}
          </div>

          <div className="flex items-center mb-4 mt-2">
            <input
              type="checkbox"
              name="aggrement"
              id="aggrement"
              value={agree}
              onChange={(e) => setAgree(e.target.value)}
              className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
            />
            <div className="text-gray-600 ml-3 cursor-pointer text-sm">
              I agree to the _
              <a
                onClick={handelPolicy}
                className="text-primary terms underline"
                download
              >
                terms &amp; conditions
              </a>
            </div>
          </div>

          {validForm ? (
            <Pay {...{ email, first_name, last_name }} />
          ) : (
            <button
              onClick={ShowModelForErrors}
              className="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium"
            >
              Place order
            </button>
          )}
        </div>
      </div>
    </>
  );
};
export default Checkout;
