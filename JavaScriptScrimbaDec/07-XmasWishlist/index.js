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
    li.addEventListener('dragstart', e => {
        const startX = e.clientX;
        const startY = e.clientY;
        li.classList.add('dragging');
        document.getElementById('trashCan').classList.add('show');
        li.dataset.startX = startX;
        li.dataset.startY = startY;
    });

    li.addEventListener('dragend', e => handleDragEnd(e, index));

    li.addEventListener('touchstart', e => {
        const startX = e.touches[0].clientX;
        const startY = e.touches[0].clientY;
        li.classList.add('dragging');
        document.getElementById('trashCan').classList.add('show');
        li.dataset.startX = startX;
        li.dataset.startY = startY;
    });

    li.addEventListener('touchend', e => handleDragEnd(e, index));
}

function handleDragEnd(e, index) {
    const li = e.target;
    li.classList.remove('dragging');
    li.style.transform = '';
    document.getElementById('trashCan').classList.remove('show');

    const trashCan = document.getElementById('trashCan').getBoundingClientRect();
    if (isOverTrashCan(trashCan, li.dataset.startX, li.dataset.startY)) {
        removeItem(index);
    }
}

function isOverTrashCan(trashCanRect, x, y) {
    return x >= trashCanRect.left && x <= trashCanRect.right &&
           y >= trashCanRect.top && y <= trashCanRect.bottom;
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
