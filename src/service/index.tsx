import axios from 'axios'

const instance = axios.create({
    baseURL: "https://api.uat.actiup.net/v2"
})

const instance2 = axios.create({
    baseURL: "https://api.actiup.net/api"
})


export const getEventSportById = (categoryId: string) => {
    return instance.get(`/content/event/homepage?event_type=sports&event_category_id=${categoryId}`)
    
};

export const getEventAttractionById = (categoryId: string) => {
    return instance.get(`/content/event/homepage?event_type=attractions&event_category_id=${categoryId}`)
};

export const getEventSport = () => {
    return instance.get(`/content/event/homepage?event_type=sports&event_category_id=`)
}

export const getEventAttraction = () => {
    return instance.get(`/content/event/homepage?event_type=attractions&event_category_id=`)
}

export const getHotEvent = () => {
    return instance2.get(`/content/events/homepage?type=homepage_hot&limit=2&lang=vi`)
}

export const getOranizeEvent = () => {
    return instance2.get(`/content/merchants/page/1?limit=3&lang=vi`)
}

export const getBlog = () => {
    return instance2.get(`/content/blogs/65a9f334e086ad11710442d6/related?lang=vi`)
}







