// ASYNC AWAIT
// merupakan Syntatic Sugar -> sintaks pemanis yang dibuat diatas Promise, untuk menyederhanakan Promise

// 1. Pengecekan Umur
function verifyAge(age: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 17) {
        resolve("Access granted: ID verified");
      } else {
        reject("Access denied: Must be at least 17 years old");
      }
    }, 7000);
  });
}

function loadProcess() {
  console.log("Processing ...");
}

async function checkUserAccess(userAge: number) {
  try {
    // await function 1
    // await function 2, dst...

    const process = await loadProcess();
    const status = await verifyAge(userAge);

    console.log(status);
    console.log(process);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Process done ...");
  }
}

// checkUserAccess(20); // success case
checkUserAccess(15); // failed case
