import UserAgent from 'user-agents';

// 缓存一个 User-Agent 实例，避免频繁生成
let cachedUserAgent: string | null = null;
let cacheExpiry = 0;
const CACHE_DURATION = 1000 * 60 * 60; // 缓存 1 小时

/**
 * 获取一个真实的浏览器 User-Agent
 * @returns 返回一个真实的 User-Agent 字符串
 */
export function getRealUserAgent(): string {
  const now = Date.now();

  // 如果缓存未过期，返回缓存的 User-Agent
  if (cachedUserAgent && now < cacheExpiry) {
    return cachedUserAgent;
  }

  // 生成新的 User-Agent
  const ua = new UserAgent({
    deviceCategory: 'desktop',
    platform: 'Windows',
  });

  const userAgent = ua.toString();
  cachedUserAgent = userAgent;
  cacheExpiry = now + CACHE_DURATION;

  return userAgent;
}

/**
 * 获取访问豆瓣的请求头
 * 使用与浏览器相同的请求头，确保能正常访问豆瓣 API
 * @returns 返回包含浏览器指纹的请求头对象
 */
export function getDoubanHeaders(): Record<string, string> {
  return {
    Accept: 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
    Referer: 'https://movie.douban.com/',
    'sec-ch-ua':
      '"Microsoft Edge";v="143", "Chromium";v="143", "Not A(Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
  };
}

/**
 * 获取访问豆瓣图片的请求头
 * 使用与浏览器相同的请求头，确保能正常访问豆瓣图片
 * @returns 返回包含浏览器指纹的图片请求头对象
 */
export function getDoubanImageHeaders(): Record<string, string> {
  return {
    Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
    Referer: 'https://movie.douban.com/explore',
    'sec-ch-ua':
      '"Microsoft Edge";v="143", "Chromium";v="143", "Not A(Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'image',
    'sec-fetch-mode': 'no-cors',
    'sec-fetch-site': 'cross-site',
    'sec-fetch-storage-access': 'none',
  };
}
