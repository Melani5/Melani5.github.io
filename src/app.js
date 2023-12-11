document.addEventListener("alpine:init", () => {
    Alpine.data("products", () => ({
        items: [
            { id: 1, name: "TTD Bumil", img: "1.img", price: 0.0 },
            { id: 2, name: "TTD Rematri", img: "2.img", price: 0.0 },
            { id: 3, name: "TTD WUS", img: "3.img", price: 0.0 },
            
           
        ],

    }));
    
});