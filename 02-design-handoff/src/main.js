const data = [
    {
        src : "./assets/architecture01.svg",
        alt : "건축사",
        figcaption : "History of Architecture",
    },
    {
        src : "./assets/architecture02.svg",
        alt : "건축설계",
        figcaption : "Building design",
    },
    {
        src : "./assets/architecture03.svg",
        alt : "기후학",
        figcaption : "Climatology",
    },
    {
        src : "./assets/architecture04.svg",
        alt : "제도법",
        figcaption : "Graphics",
    },
]

function renderList() {
    const listWrapper = document.querySelector(".list_warpper");
  
    for (let item of data) {
      const template = `
        <li>
          <figure>
            <img
              src="${item.src}"
              alt="${item.alt}"
            />
            <figcaption>${item.figcaption}</figcaption>
          </figure>
        </li>
      `;
  
      listWrapper.insertAdjacentHTML('beforeend', template);
    }
  }
  
  renderList();