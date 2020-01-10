// hardcoded since rails can only be accessed outside of container
// by running on puma or 0.0.0.0
const port = "9292";    // "3001";
const hostname = window.location.hostname === "localhost" 
    ? window.location.hostname + ":" + port
    : "api." + window.location.hostname; 
const ROOT_API = window.location.protocol + "//" + hostname;

// dev only, we falling back on the proxy
// for Docker
//const ROOT_API = "rails-server";

export const API_URL = {
    TASK_BASE: `${ROOT_API}/api/v1/tasks`,
    LABEL_BASE: `${ROOT_API}/api/v1/labels`,
    TASKLABEL_BASE: `${ROOT_API}/api/v1/tasklabels`,
}

export const TASK_BASE = "TASK_BASE";
export const LABEL_BASE = "LABEL_BASE";
export const TASKLABEL_BASE = "TASKLABEL_BASE";




export const BASE_COLOUR = "#ff6699";
export const TRIM_COLOUR = "#ff0066";
export const HIGHLIGHT_COLOUR = "#fbf9f9";
