const port = "3001";    // "9292";
const hostname = window.location.hostname === "localhost" 
    ? window.location.hostname + ":" + port
    : "api." + window.location.hostname; 
const ROOT_API = window.location.protocol + "//" + hostname;

//const ROOT_API = "rails-server" + ":" + port;

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
