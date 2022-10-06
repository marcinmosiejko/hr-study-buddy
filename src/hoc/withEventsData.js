import axios from 'axios';
import React, { useEffect, useState } from 'react';

// HOC
const withEventsData = (WrappedComponent, group) => {
  return function WithEventsDataWrapper() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
      axios.get(`/events/${group}`).then(({ data }) => setEvents(data.events));
    }, []);

    return <WrappedComponent events={events} />;
  };
};

// Normallny would live in a seperate file and import the withEventsData HOC
const DisplayEvents = (props) => {
  return <div>log events {console.log(props)}</div>;
};

export const DisplayEventsData = withEventsData(DisplayEvents, 'A');
