document.addEventListener("DOMContentLoaded", () => {
  updateWishList();
});

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function updateWishList() {
  const list = document.querySelector(".wishlist");
  list.innerHTML = "";
  const ul = document.createElement("ul");

  wishlist.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;

    li.setAttribute('draggable', true);
    li.classList.add('draggable');

    // Add event listeners for drag and touch events
    addEventListeners(li, index);


    ul.appendChild(li);
  });
  list.appendChild(ul);
}

function addEventListeners(li, index) {
    let startX;

    li.addEventListener('dragstart', () => li.classList.add('dragging'));
    li.addEventListener('dragend', () => handleDragEnd(li, index));

    li.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
        li.classList.add('dragging');
    });

    li.addEventListener('touchmove', e => {
        const touchX = e.touches[0].clientX;
        li.style.transform = `translateX(${touchX - startX}px)`;
    });

    li.addEventListener('touchend', () => handleDragEnd(li, index));
}

function handleDragEnd(li, index) {
    li.classList.remove('dragging');
    li.style.transform = '';

    if (li.getBoundingClientRect().left > 150) { // Change 150 to your threshold
        removeItem(index);
    }
}


function addItem() {
  const newItem = document.getElementById("newItem").value.trim();

  if (newItem && !wishlist.includes(newItem)) {
        const item = capitalize(newItem);
        console.log(item);
        wishlist.push(item);
        updateWishList();
        saveWishlist();
        document.getElementById("newItem").value = "";
  }
}

function removeItem(index) {
    wishlist.splice(index, 1);
    updateWishlist();
    saveWishlist();
}

function saveWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function capitalize(item) {
    const arr = item.split(" ");
    const capitalizedArr = arr.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return capitalizedArr.join(" ");
}


/** Challenge:
    - Iterate over the wishlist array.
    - Dynamically render your wishlist from the array.
    - Style the wishlist with CSS.
  **/
