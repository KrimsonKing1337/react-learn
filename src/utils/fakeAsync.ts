export function fakeAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1500);
  });
}
