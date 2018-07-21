export const types = {
  APP_INIT: 'app/INIT',
  APP_INIT_SUCCESS: 'app/INIT_SUCCESS',
  APP_INIT_FAILED: 'app/INIT_FAILED',
  APP_NAVIGATE_TO_ROUTE: 'app/NAVIGATE_TO_ROUTE',
};


export function initApp() {
  return {
    type: types.APP_INIT,
  };
}

export function initAppSuccess(payload) {
  return {
    type: types.APP_INIT_SUCCESS,
    payload,
  };
}

export function initAppFailed(failure) {
  return {
    type: types.APP_INIT_FAILED,
    failure,
  };
}

export function navigateToRoute() {
  return {
    type: types.APP_NAVIGATE_TO_ROUTE,
  };
}

