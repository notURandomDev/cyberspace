import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

// 定义请求方法类型
type RequestMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

// 通用请求函数
const request = async <T = any>(
  method: RequestMethod,
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  try {
    const response: AxiosResponse<T> = await axios({
      method,
      url,
      data,
      ...config,
    });
    return response;
  } catch (error) {
    // 处理错误
    const axiosError = error as AxiosError;
    console.error("Request failed:", axiosError.message);
    throw axiosError;
  }
};

// 封装具体的请求方法
export const AxiosGet = <T = any>(url: string, config?: AxiosRequestConfig) =>
  request<T>("GET", url, null, config);

export const AxiosPost = <T = any>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
) => request<T>("POST", url, data, config);

export const AxiosPut = <T = any>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
) => request<T>("PUT", url, data, config);

export const AxiosDelete = <T = any>(
  url: string,
  config?: AxiosRequestConfig
) => request<T>("DELETE", url, null, config);

export const AxiosPatch = <T = any>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
) => request<T>("PATCH", url, data, config);

export default request;
