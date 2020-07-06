export interface Device {
        "device_id":string,
        "serial_num":string,
        "device_name":string,
        "created_at":string,
        "updated_at":string,
        "status":string,
        "last_contacted":string,
        "description": string
        "device_cap": device_cap[]
}

export interface device_cap {
    feature: string,
    product_family?: string
}