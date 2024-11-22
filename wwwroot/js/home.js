let product_list = document.getElementById("product_list");
let news_list = document.getElementById("news_list");

function add(name, id) {
    let item = `
    <li class="product_list_item">
        <div id="item_builder_${id}" class="item_builder">
            <div class="number">
                <span id="${id}">${id}</span> 
                <a id="item_name_${id}" href="#">${name}</a><br>
            </div>
            <button id="item_button_${id}" class="product_btn"><i class="fa-solid fa-arrow-right"></i></button>
        </div>
    </li>
    `;

    product_list.insertAdjacentHTML("beforeend", item);

    const itemBuilder = document.getElementById(`item_builder_${id}`);
    const numberSpan = document.getElementById(id);
    const button = document.getElementById(`item_button_${id}`)
    const label = document.getElementById(`item_name_${id}`)

    itemBuilder.addEventListener("mouseenter", () => {
        numberSpan.style.color = "orange";
        button.style.display = "block";
        label.style.color = "#FFFFFF";
    });

    itemBuilder.addEventListener("mouseleave", () => {
        numberSpan.style.color = "";
        button.style.display = "none";
        label.style.color = "";
    });
}


function add_card(name, desc, date, img) {
    let item = `<li>
                        <div class="news_card">
                            <div class="nc_title">
                                <p><i class="fa-solid fa-circle"></i></p>
                                <h4>${name}</h4>
                            </div>
                            <br>
                            <div class="nc_content">
                                <p>${desc}</p>
                            </div>
                            <div class="nc_date">${date}</div>
                            <br />
                            <div class="nc_image">
                                <img src="${img}" alt="" />
                            </div>
                        </div>
                    </li>`

    news_list.insertAdjacentHTML("beforeend", item);

}


document.addEventListener("DOMContentLoaded", () => {
    add("Kaynak Makineleri", "01");
    add("Kaynak Sarf Malzemeleri", "02");
    add("Kaynak Otomasyonları", "03");
    add("Aksesuarlar", "04");

    add_card("Haber", "Atalay Kaynak'tan Çevre Dostu Kaynak Çözümleri", "17 Ağustos 2024", "/images/img5.png");
    add_card("Blog", "Atalay Kaynak Akıllı Çözümlerle Sektöre Öncülük Ediyor", "17 Ağustos 2024", "/images/img6.png");
    add_card("Etkinlik", "Sektör Liderleriyle İş Birliklerimiz Büyümeye Devam Ediyor", "17 Ağustos 2024", "/images/img7.png");

});



