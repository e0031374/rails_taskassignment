const hostname = window.location.hostname === "localhost" 
    ? window.location.hostname + ":3001"
    : "api." + window.location.hostname; 
const ROOT_API = window.location.protocol + "//" + hostname;

// dev only, we falling back on the proxy
//const ROOT_API = "";

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
