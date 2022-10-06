import axios from 'axios';
import React, { useEffect, useState } from 'react';

const EventsProvider = ({ render, group }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get(`/events/${group}`).then(({ data }) => setEvents(data.events));
  }, [group]);

  return render(events);
};

export default EventsProvider;
