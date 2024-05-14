async function fetchData(gender: string, webCategories: string[]) {
    const apiUrl = `https://api.newyorker.de/csp/products/public/query?filters[country]=de&filters[gender]=${gender}&filters[web_category]=${webCategories.join(',')}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return await response.json();
}

export default fetchData;
