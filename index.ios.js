"use strict";

import { NativeModules, processColor } from "react-native";

const RNCalendarEvents = NativeModules.RNCalendarEvents;

export default {
  calendarAuthorizationStatus() {
    return RNCalendarEvents.eventAuthorizationStatus();
  },

  reminderAuthorizationStatus() {
    return RNCalendarEvents.reminderAuthorizationStatus();
  },

  authorizeCalendar() {
    return RNCalendarEvents.authorizeEvent();
  },

  authorizeReminder() {
    return RNCalendarEvents.authorizeReminder();
  },

  fetchAllEvents(startDate, endDate, calendars = []) {
    return RNCalendarEvents.fetchAllEvents(startDate, endDate, calendars);
  },

  findCalendars(type = "calendar") {
    return RNCalendarEvents.findCalendarsByType(type);
  },

  saveCalendar(options = {}) {
    return RNCalendarEvents.saveCalendar({
      ...options,
      color: options.color ? processColor(options.color) : undefined
    });
  },

  findEventById(id) {
    return RNCalendarEvents.findEventById(id);
  },

  saveEvent(title, details, options = {}) {
    return RNCalendarEvents.saveEvent(title, details, options);
  },

  removeEvent(id, options = { futureEvents: false }) {
    return RNCalendarEvents.removeEvent(id, options);
  },

  removeFutureEvents(id, options = { futureEvents: true }) {
    return RNCalendarEvents.removeEvent(id, options);
  }
};
