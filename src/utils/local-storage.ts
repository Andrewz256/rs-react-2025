export async function setSearchLSStr(searchStr: string) {
  localStorage.setItem('searchStr', searchStr);
}

export async function setID(browserStr: string) {
  localStorage.setItem('browserStr', browserStr);
}

export function getSearchStr() {
  const searchStr = localStorage.getItem('searchStr');
  console.log(searchStr);
  return searchStr;
}

export function checkID(browserStr: string): boolean {
  return localStorage.browserStr === browserStr;
}
