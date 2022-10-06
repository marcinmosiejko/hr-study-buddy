import axios from 'axios';
import React, { useEffect, useState } from 'react';

// HOC
const withEventsData = (WrappedComponent, group) => {
  return function WithEventsDataWrapper() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
      axios.get(`/events/${group}`).then(({ data }) => setEvents(data.events));
    }, [group]);

    return <WrappedComponent events={events} />;
  };
};

// Normallny would live in a seperate file and import the withEventsData HOC
export const DisplayEvents = (props) => {
  return <div>log events {console.log(props)}</div>;
};

export const DisplayEventsData = withEventsData(DisplayEvents, 'A');
