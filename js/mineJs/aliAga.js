const aliAga = {
    "goBack": {
        "EN": "Go Back",
        "TR": "Geri Git",
        "РУС": "вернитесь назад"
    },
    "projectIzmir": {
        "EN": "Izmir Aliaga Aegean Refinery Project - Channel to the Sea Package / Izmir",
        "TR": "İzmir Aliağa Ege Rafineri Projesi - Denize Giden Kanal / İzmir",
        "РУС": "Эгейский НПЗ, г.Измир, Алиага - Пакет строительства канала к морю / Измир"
    },
    "completedProjects": {
        "EN": "Completed Projects",
        "TR": "TAMAMLANMIŞ PROJELER",
        "РУС": "ГОТОВАЯ ПРОЕКТЫ"
    },
    "currentProjects": {
        "EN": "Current Projects",
        "TR": "DEVAM EDEN PROJELER",
        "РУС": "ПРОДОЛЖИТЬ ПРОЕКТЫ"
    },
    "pr1": {
        "EN": "Izmir Aliaga Aegean Refinery Project - Channel to the Sea Package",
        "TR": "İzmir Aliağa Ege Rafineri Projesi - Denize Giden Kanal",
        "РУС": "Эгейский НПЗ, г.Измир, Алиага - Пакет строительства канала к морю"
    },
    "pr2": {
        "EN": "Project Location:",
        "TR": "Proje Yeri:",
        "РУС": "Расположение проекта:"
    },
    "pr3": {
        "EN": "Izmir",
        "TR": "Izmir",
        "РУС": "Измир"
    },
    "pr4": {
        "EN": "Date",
        "TR": "Tarih:",
        "РУС": "дата:"
    },
    "pr5": {
        "EN": "March, 2016",
        "TR": "Mart, 2016",
        "РУС": "марта, 2016"
    },
    "pr6": {
        "EN": "Project Category:",
        "TR": "Proje Kategorisi:",
        "РУС": "Категория проекта:"
    },
    "pr7": {
        "EN": "Industrial Projects",
        "TR": "Endüstriyel Projeler",
        "РУС": "Промышленные объекты"
    },
    "pr8": {
        "EN": "Project Employer:",
        "TR": "İşveren:",
        "РУС": "работодатель:"
    },
    "pr9": {
        "EN": "TSGI",
        "TR": "TSGI",
        "РУС": "TSGI"
    },
    "pr10": {
        "EN": "Project Scope:",
        "TR": "Proje Kapsamı:",
        "РУС": "Масштаб проекта:"
    },
    "pr11": {
        "EN": "Civil, Steel, Piping, Painting and Insulation Works.",
        "TR": "İnşaat , Çelik , Boru , Boya ve İzolasyon İşleri.",
        "РУС": "Общестроительные работы, монтаж металлоконструкций, прокладка трубопроводов, окрасочные и изоляционные работы."
    },
    "bottom1": {
        "EN": "YAMATA HEAD OFFICE",
        "TR": "YAMATA MERKEZ OFİS",
        "РУС": "ЯMATA ГЛАВНЫЙ ОФИС"
    },
    "adressBottom": {
        "EN": "Cubuklu Mah. Orhan Veli Kanik Cad. No: 11, 34810 Beykoz / Istanbul, TURKEY",
        "TR": "Çubuklu Mah. Orhan Veli Kanık Cad. No: 11, 34810 Beykoz / İstanbul, TÜRKİYE",
        "РУС": "Чубуклу мах., Орхан Вели Канык Джад.,№: 11, 34810, Бейкоз / Стамбул - Турция"
    }
}
addTexts(aliAga);

setTexts();



document.getElementById("TR").onclick = () => {
    if (current_language == "EN" || current_language == "РУС")
        current_language = "TR";


    setTexts();
}
document.getElementById("EN").onclick = () => {
    if (current_language == "TR" || current_language == "РУС")
        current_language = "EN";

    setTexts();
}

document.getElementById("РУС").onclick = () => {
    if (current_language == "TR" || current_language == "EN")
        current_language = "РУС";

    setTexts();
}