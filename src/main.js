import {addNavigation} from './view/navigation.js';
import {createFilterTemplate} from './view/filter.js';
import {getInfoOfRoute} from './view/info-route.js';
import {addPointOfRouteList} from './view/point.js';
import {createSortTemplate} from './view/sort.js';
import {editPoint} from './view/edit-point';
import {createNewPoint} from './view/new-point';
import {addEvent} from './view/add-point.js';
import {render} from './util.js';

const POINTS_COUNT = 3;

const itemPoints = Array.from(new Array(POINTS_COUNT), () => addEvent());

const tripMainContainer = document.querySelector('.trip-main');
const tripNavigation = document.querySelector('.trip-controls__navigation');
const tripFilter = document.querySelector('.trip-controls__filters');
const tripEvent = document.querySelector('.trip-events');

render(tripMainContainer, getInfoOfRoute(), 'afterbegin');
render(tripNavigation, addNavigation());
render(tripFilter, createFilterTemplate());
render(tripEvent, createSortTemplate());
render(tripEvent, addPointOfRouteList(
  editPoint(),
  createNewPoint(),
  ...itemPoints,
));

