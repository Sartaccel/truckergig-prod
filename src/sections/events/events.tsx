import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { EventsCards } from "../../components/EventsCards/EventCards";
import axios from "axios";
import { Pagination } from "antd";
import "antd/dist/antd.css";
import styles from './events.module.scss';
import urls from "../../utilities/AppSettings";
import Image from "next/image";

const Events: React.FC = () => {
  const router = useRouter();
  const [events, setEvents] = useState([]);
  const [eventData, setEventData] = useState(null);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(12);
  const [loading, setLoading] = useState(true);  // Add this state


  useEffect(() => {
    setLoading(true); 
    const params = { "pageNo": 0, "searchBy": "", "pageSize": 20, "sortBy": "", "sortOrder": "" };
    axios.post(`${urls.baseUrl}event/list`, params).then((response) => {
      const data = response.data.data.content;
      if (response.status === 200 && data.length > 0) {
        setEvents(data);
        setEventData(data[0]);
      } else {
        setEvents([]);
        setEventData(null);
      }
    }).catch(error => {
      console.error("Error fetching events:", error);
    })
    .finally(() => {
      setLoading(false); // Stop loading after fetching data
    });
  }, []);

  const handleChange = (value: number) => {
    if (value <= 1) {
      setMinValue(0);
      setMaxValue(12);
    } else {
      setMinValue(value * 12 - 12);
      setMaxValue(value * 12);
    }
  };

  return (

    <>
   <div className={styles.container}>  {/* Added a container for spacing */}
      <div className={styles.eventHead}>
        <Image
          src="/images/e.jpg"
          alt="Truck in Logistics"
          layout="fill"
          priority={false} 
          className={styles.eventImage}
        />
        <div className={styles.overlay}>
          <h2 className={styles.title}>EVENTS</h2>
          <p className={styles.description}>
            Stay updated with the latest logistics and transportation events. <br />
            Connect, learn and grow with industry leaders!
          </p>
        </div>
      </div>

      <div className="p-3">
        <div className="row">
          {loading ? (
            <div className="text-center">
              <div className="spinner-border text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : events.length > 0 ? (
            <>
              <div className="col-lg-12">
                <div className="row pt-4 pb-4">
                  {events.slice(minValue, maxValue).map((event, index) => (
                    <EventsCards key={index} items={event} seteventData={setEventData} />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="text-center">
              <h2>Oops! There are No Events at the Moment</h2>
              <img src="/images/no enents.jpg" className={styles["img-fluid"]} />
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default Events;