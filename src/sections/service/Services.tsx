// import React from "react";
// import NewArrivals from '../../components/NewArrivals/NewArrivals';
// import RecentlyViewed from '../../components/RecentlyViewed/RecentlyViewed';
// import PopularItems from '../../components/PopularItems/PopularItems';
// import Filter from '../../components/Filter/Filter';
// import Breadcrumb from 'react-bootstrap/Breadcrumb';
// import styles from "./services.module.scss";


// const Services: React.FC = () => {
// 	return (
// 		<>
// 			 <div className="p-3">
// 				<div className="row">
// 					<div className="col-12">
// 						<Breadcrumb>
// 							<Breadcrumb.Item href="/">Home</Breadcrumb.Item>
// 							<Breadcrumb.Item active>Marketplace</Breadcrumb.Item>
// 						</Breadcrumb>
// 					</div>
// 				</div>
// 				<div className="row">
// 					<div className="col-lg-3">
// 						<Filter />
// 					</div>
// 					<div className="col-lg-7">
// 						<div className="row">
// 							<div className="col-sm-12">
// 								<NewArrivals />
// 							</div>
// 						</div>
// 						<div className="row pt-4 pb-4">
// 							<div className="col-sm-12">
// 								<RecentlyViewed />
// 							</div>
// 						</div>
// 						<div className="row pt-4 pb-4">
// 							<div className="col-sm-12">
// 								<PopularItems />
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div> 
// 		</>
// 	);
// }

// export default Services;


import React from "react";
import NewArrivals from '../../components/NewArrivals/NewArrivals';
import RecentlyViewed from '../../components/RecentlyViewed/RecentlyViewed';
import PopularItems from '../../components/PopularItems/PopularItems';
import Filter from '../../components/Filter/Filter';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import styles from "./services.module.scss";
import { useState, useEffect, createRef, useRef } from "react";
import { useRouter } from 'next/router'
import { CategoriesCards } from "../../components/CategoriesCards/CategoriesCards";
import axios, { AxiosRequestConfig } from "axios";
import urls from "../../utilities/AppSettings";
import "antd/dist/antd.css";
import { Pagination } from "antd";

const Services: React.FC = (props) => {
	const router = useRouter()
	const [hasQueryParams, setHasQueryParams] = useState(false);
	const [categories, setcategories] = useState([])
	const [service, setservice] = useState([])
	const [selectedOption, setSelectedOption] = useState();
	const [servicelist, setservicelist] = useState<any>();
	const [servicecat, setServicecat] = useState<string>('');
	const [activefilter, setactivefilter] = useState("")
	const [childEle, setChildEle] = useState("");
	const [loading, setLoading] = useState(false);

	const { id, ids, servicename } = router.query;
const hasQuery = id || ids || servicename;

	useEffect(() => {
	  if (!router.isReady) return;

	  const hasQuery = !!(router.query.servicename || router.query.id || router.query.ids);
  	  setHasQueryParams(hasQuery);

	  const controller = new AbortController();
	  const delayDebounce = setTimeout(() => {
		setLoading(true);
  
		const serv = router.query.name;
		const params = {
		  serviceName: router.query.servicename || '',
		  serviceCategoryId: router.query.id,
		  serviceSubCategoryId: router.query.ids,
		  serviceFilterId: 0,
		};
  
		// POST request
		axios.post(`${urls.baseUrl}services`, params, {
		  ...(controller.signal && { signal: controller.signal }) as AxiosRequestConfig
		})
		  .then((response) => {
			const data = response.data.data;
			if (response.status === 200 && data.length > 0) {
			  setcategories(data);
			  setservice(data[0]);
			  const namequery = router.query.servicename || router.query.name || router.query.id || router.query.ids;

			  const name = namequery
				? (router.query.name || router.query.servicename || data[0]?.serviceName || '')
				: '';
			
			  setServicecat(name)
        } else {
          setcategories([]);
          setservice(null);
        }
      })
		  .catch((err) => {
			if (!axios.isCancel(err)) {
			  console.error('Service fetch failed', err);
			  setcategories([]);
			  setservice(null);
			  setServicecat('');
			}
		  })
		  .finally(() => {
			setLoading(false);
		  });
  
		// GET request for categories list
		axios.get(`${urls.baseUrl}services/categories/list`, {
		  ...(controller.signal && { signal: controller.signal }) as AxiosRequestConfig
		})
		  .then((response) => {
			const data = response.data.data;
			if (response.status === 200 && data.length) {
			  const check_orders = data.filter(order => (
				order.id == router.query.id || order.id == router.query.ids
			  ));
			  setservicelist(check_orders[0]);
			}
		  })
		  .catch((err) => {
			if (!axios.isCancel(err)) {
			  console.error('Category list fetch failed', err);
			}
		  });
  
	   }); 
	  return () => {
		clearTimeout(delayDebounce);
		controller.abort(); // cancel previous requests
	  };
	}, [router.query.id, router.query.servicename, router.query.ids, router.query.name, router.isReady]);

	    const [minValue, setminValue] = useState(0)
		const [maxValue, setmaxValue] = useState(9)
		const handleChange = (Value) => {
		  console.log(Value)
		  if (Value <= 1) {
			setminValue(0);
			setmaxValue(9)
		  } else {
			setminValue(Value * 9 - 9),
			  console.log(minValue)
			setmaxValue(Value * 9)
			console.log(maxValue)
		  }
		};
	  
	  
		var lang = { "serviceCategoryId": router.query.id, "serviceSubCategoryId": router.query.ids, }
	return (
		<>
		<div className="p-3 d-flex justify-content-center">
  <div className={`container ${styles.customContainer}`}>
    <div className="row">
      <div className="col-12">
	  <Breadcrumb>
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="/marketplace">Marketplace</Breadcrumb.Item>
  {servicecat && (
  <Breadcrumb.Item active>{servicecat}</Breadcrumb.Item>
)}
</Breadcrumb>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-3">
	  <Filter />
      </div>
      <div className="col-lg-9">
        {/* Show loader if needed */}
        {loading ? (
          <div className="text-center w-100 py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <>
           
			{!hasQueryParams && (
              <>
                <div className="row">
                  <div className="col-sm-12">
                    <NewArrivals />
                  </div>
                </div>
                <div className="row pt-4 pb-4">
                  <div className="col-sm-12">
                    <RecentlyViewed />
                  </div>
                </div>
                <div className="row pt-4 pb-4">
                  <div className="col-sm-12">
                    <PopularItems />
                  </div>
                </div>
              </>
			)}
			{hasQueryParams && !loading && categories.length > 0 && (
              <>
                <div className="row pt-4 pb-4">
                  {categories.length > 9
                    ? categories.slice(minValue, maxValue).map((z, k) => (
                        <CategoriesCards key={k} items={z} setservice={setservice} />
                      ))
                    : categories.map((z, k) => (
                        <CategoriesCards key={k} items={z} setservice={setservice} />
                      ))}
                </div>

                {/* Pagination */}
                {categories.length > 9 ? (
                  <div className="row">
                    <div className="col-5">
                      <p className={styles["pag-items"]}>
                        Items {minValue + 1} to {Math.min(maxValue, categories.length)} of {categories.length} total
                      </p>
                    </div>
                    <div className="col-7 pt-4 pb-4">
                      <Pagination
                        defaultCurrent={1}
                        defaultPageSize={12}
                        onChange={handleChange}
                        total={categories.length}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="col-5">
                    <p className={styles["pag-items"]}>{categories.length} Items</p>
                  </div>
                )}
              </>
		)}
		{hasQueryParams && !loading && categories.length === 0 && (
			<>
  <div className="text-center w-100 py-5">
    <img
      src="/images/marketplace-NoMatches.jpg" // your image path here
      alt="No matches found"
      style={{ maxWidth: "300px", width: "100%" }}
    />
    <p className="mt-3 fs-5 text-muted">No matching services found.</p>
  </div>
  </>
)}

          </>
        )}
      </div>
    </div>
  </div>
</div>

		</>
	);
}

export default Services;
