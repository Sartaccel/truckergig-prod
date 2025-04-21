import React from "react";
import NewArrivals from '../../components/NewArrivals/NewArrivals';
import RecentlyViewed from '../../components/RecentlyViewed/RecentlyViewed';
import PopularItems from '../../components/PopularItems/PopularItems';
import Filter from '../../components/Filter/Filter';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import styles from "./services.module.scss";


const Services: React.FC = () => {
	return (
		<>
			{/* <div className="p-3">
				<div className="row">
					<div className="col-12">
						<Breadcrumb>
							<Breadcrumb.Item href="/">Home</Breadcrumb.Item>
							<Breadcrumb.Item active>Marketplace</Breadcrumb.Item>
						</Breadcrumb>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-3">
						<Filter />
					</div>
					<div className="col-lg-7">
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
					</div>
				</div>
			</div> */}

<div className="p-3 d-flex justify-content-center">
<div className={`container ${styles.customContainer}`}>
        <div className="row">
            {/* <div className="col-12">
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Marketplace</Breadcrumb.Item>
                </Breadcrumb>
            </div> */}
        </div>
        <div className="row">
            {/* Filter section (equal width as cards section) */}
            <div className="col-lg-3">
                <Filter />
            </div>
            {/* Cards section */}
            <div className="col-lg-9">
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
            </div>
        </div>
    </div>
</div>

		</>
	);
}

export default Services;
