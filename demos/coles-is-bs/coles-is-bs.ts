async function main() {
  const res = await fetch("https://www.coles.com.au/on-special?page=2");
  const text = await res.text();
  const dom = new DOMParser().parseFromString(text, "text/html");
  console.log(dom);
}

main();
