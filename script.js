document.addEventListener("DOMContentLoaded", () => {
    const designerDetails = document.getElementById("designerDetails");
    const shopItems = document.getElementById("shopItems");
    const galleryImages = document.getElementById("galleryImages");
    

    // Sample data
    const designers = [
        { name: "Bridget Otu", phone: "+234 802-3985-993", email: "bridgetotu454@gmail.com", address: "No.3,Rufai,Makinde street,Surulere,Lagos." },
        { name: "Ugwoke Charity", phone: "+234 810-1931-989", email: "bridgetotu8@gmail.com", address: "No.3,Rufai,Makinde street,Surulere,Lagos." },
    ];

    const items = [
        { name: "Ankara Gown", price: "$50", image: "ankara.jpg" },
        { name: "Traditional Wrapper", price: "$30", image: "wrapper.jpg" },
    ];

    const gallery = ["image1.jpg", "image2.jpg", "image3.jpg"];

    // Populate designer details
    designerDetails.innerHTML = designers
        .map(designer => `<p>${designer.name}, ${designer.phone}, ${designer.email}, ${designer.address}</p>`)
        .join("");

    // Populate shop items
    shopItems.innerHTML = items
        .map(item => `<div><h3>${item.name}</h3><p>${item.price}</p></div>`)
        .join("");

    // Populate gallery
    galleryImages.innerHTML = gallery
        .map(image => `<img src="${image}" alt="Gallery Image" style="width:100px;">`)
        .join("");

        
        const handleSubmit = async (event) => {
            event.preventDefault();
        
            const formData = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                message: document.getElementById("message").value,
            };
        
            try {
                const response = await fetch("http://localhost:5000/send-email", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });
        
                if (response.ok) {
                    alert("Message sent successfully!");
                } else {
                    alert("Failed to send message. Please try again.");
                }
            } catch (error) {
                console.error("Error:", error);
                alert("An error occurred. Please try again.");
            }
        };
        
        document.getElementById("contact-form").addEventListener("submit", handleSubmit);
});
