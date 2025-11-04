 // All Products Data (using images instead of icons)
        const products = [
            // 🧠 CPU
            { 
                id: 1, 
                name: "AMD Ryzen 9 7950X", 
                category: "CPU", 
                price: 549.99,
                oldPrice: 699.99,
                image: "https://m.media-amazon.com/images/I/71O2AJkJpGL.jpg",
                specs: "16 Cores, 32 Threads, 5.7 GHz Max Boost",
                rating: 4.8,
                reviews: 256,
                badge: "Hot"
            },
            { 
                id: 2, 
                name: "Intel Core i9-14900K", 
                category: "CPU", 
                price: 589.99,
                oldPrice: null,
                image: "https://m.media-amazon.com/images/I/61IzFqFZCUL.jpg",
                specs: "24 Cores, 32 Threads, 6.0 GHz Turbo",
                rating: 4.9,
                reviews: 189,
                badge: "New"
            },

            // 🎮 GPU
            { 
                id: 3, 
                name: "NVIDIA RTX 4090", 
                category: "GPU", 
                price: 1599.99,
                oldPrice: null,
                image: "https://m.media-amazon.com/images/I/71N0G0I5GQL._AC_SL1500_.jpg",
                specs: "24GB GDDR6X, 16384 CUDA Cores",
                rating: 5.0,
                reviews: 412,
                badge: "Best Seller"
            },
            { 
                id: 4, 
                name: "AMD RX 7900 XTX", 
                category: "GPU", 
                price: 999.99,
                oldPrice: 1099.99,
                image: "https://m.media-amazon.com/images/I/61Pek6U82OL._AC_SL1500_.jpg",
                specs: "24GB GDDR6, Ray Tracing",
                rating: 4.7,
                reviews: 298,
                badge: "Sale"
            },

            // 💾 RAM
            { 
                id: 5, 
                name: "G.Skill Trident Z5 32GB", 
                category: "RAM", 
                price: 139.99,
                oldPrice: null,
                image: "https://m.media-amazon.com/images/I/71A1W-+6nZL._AC_SL1500_.jpg",
                specs: "DDR5-6000, CL30, RGB",
                rating: 4.6,
                reviews: 178,
                badge: null
            },
            { 
                id: 6, 
                name: "Corsair Vengeance 64GB", 
                category: "RAM", 
                price: 249.99,
                oldPrice: 299.99,
                image: "https://m.media-amazon.com/images/I/71NOvm9CBCL._AC_SL1500_.jpg",
                specs: "DDR5-5600, CL36, Dual Kit",
                rating: 4.8,
                reviews: 201,
                badge: "Sale"
            },

            // 🖥️ Motherboard
            { 
                id: 7, 
                name: "ASUS ROG Strix Z790-E Gaming WiFi", 
                category: "Motherboard", 
                price: 29999.00,  // approx price in PHP
                oldPrice: null,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8w67LBHWZ8CgaV-sfIn5q3Zq3LIWvSfkXSA&s",
                specs: "LGA1700, PCIe 5.0, WiFi 6E",
                rating: 4.8,
                reviews: 245,
                badge: "New"
            },
            { 
                id: 8, 
                name: "MSI MAG B550 Tomahawk", 
                category: "Motherboard", 
                price: 14999.00,
                oldPrice: null,
                image: "https://ecommerce.datablitz.com.ph/cdn/shop/products/1024_56_800x.jpg?v=1676878243",
                specs: "AM4, DDR4, Dual M.2, 2.5G LAN",
                rating: 4.7,
                reviews: 189,
                badge: null
            },
            { 
                id: 9, 
                name: "Gigabyte B660M DS3H AX DDR4", 
                category: "Motherboard", 
                price: 13999.00,
                oldPrice: null,
                image: "https://static.gigabyte.com/StaticFile/Image/Global/6815680d01bd1a0f00e548251bd5743b/Product/30364/png",
                specs: "LGA1700, DDR4, WiFi 6",
                rating: 4.6,
                reviews: 122,
                badge: null
            },
            { 
                id: 10, 
                name: "ASRock B550M Steel Legend", 
                category: "Motherboard", 
                price: 12999.00,
                oldPrice: null,
                image: "https://ecommerce.datablitz.com.ph/cdn/shop/files/vsdxx.jpg?v=1708239864",
                specs: "AM4, DDR4, PCIe 4.0, RGB",
                rating: 4.7,
                reviews: 132,
                badge: "Hot"
            },
            { 
                id: 11, 
                name: "ASUS PRIME A520M-K", 
                category: "Motherboard", 
                price: 8999.00,
                oldPrice: null,
                image: "https://ecommerce.datablitz.com.ph/cdn/shop/files/1_d5ae6583-25c3-401d-becd-a5e1b9a3b710_800x.jpg?v=1688258285",
                specs: "AM4, DDR4, Micro ATX",
                rating: 4.5,
                reviews: 98,
                badge: null
            },
            { 
                id: 12, 
                name: "Gigabyte X670 AORUS Elite AX", 
                category: "Motherboard", 
                price: 21999.00,
                oldPrice: null,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyxxM_FttQQMLXz0UV01BJtx7Z9fxLRLOO5Q&s",
                specs: "AM5, DDR5, WiFi 6E",
                rating: 4.9,
                reviews: 211,
                badge: "Best Seller"
            },
            { 
                id: 13, 
                name: "MSI PRO Z790-P WiFi", 
                category: "Motherboard", 
                price: 17999.00,
                oldPrice: null,
                image: "https://ecommerce.datablitz.com.ph/cdn/shop/files/456dsg45ds.jpg?v=1760256334",
                specs: "LGA1700, DDR5, PCIe 5.0",
                rating: 4.7,
                reviews: 156,
                badge: null
            },
            { 
                id: 14, 
                name: "ASRock B450M Pro4", 
                category: "Motherboard", 
                price: 10999.00,
                oldPrice: null,
                image: "https://m.media-amazon.com/images/I/717fM36M3sL._AC_SL1200_.jpg",
                specs: "AM4, DDR4, Micro ATX",
                rating: 4.4,
                reviews: 172,
                badge: null
            },
            { 
                id: 15, 
                name: "ASUS TUF Gaming X670E-PLUS WiFi", 
                category: "Motherboard", 
                price: 24999.00,
                oldPrice: null,
                image: "https://www.itech.ph/wp-content/uploads/2023/11/ASUS-TUF-Gaming-X670E-PLUS-WiFi-6E-Socket-AM5-LGA-1718-Ryzen-7000-ATX-Gaming-Motherboard-3-jpg.webp",
                specs: "AM5, PCIe 5.0, WiFi 6E",
                rating: 4.8,
                reviews: 188,
                badge: "New"
            },
            { 
                id: 16, 
                name: "Gigabyte Z690 AORUS Ultra", 
                category: "Motherboard", 
                price: 23999.00,
                oldPrice: null,
                image: "https://cdn.mos.cms.futurecdn.net/uesoSwMbyY9tVBqgxWxuh3.jpg",
                specs: "LGA1700, DDR5, WiFi 6E, PCIe 5.0",
                rating: 4.9,
                reviews: 203,
                badge: "Premium"
            },


            // ❄️ Cooling
            { 
                id: 9, 
                name: "NZXT Kraken 360", 
                category: "Cooling", 
                price: 199.99,
                oldPrice: null,
                image: "https://m.media-amazon.com/images/I/71RZ9Rdn1TL._AC_SL1500_.jpg",
                specs: "360mm AIO, RGB, Quiet Performance",
                rating: 4.7,
                reviews: 312,
                badge: null
            },
            { 
                id: 10, 
                name: "Arctic Liquid Freezer II", 
                category: "Cooling", 
                price: 139.99,
                oldPrice: 169.99,
                image: "https://m.media-amazon.com/images/I/71bH7fItVWL._AC_SL1500_.jpg",
                specs: "280mm AIO, Silent Operation",
                rating: 4.9,
                reviews: 289,
                badge: "Sale"
            },

            // 💿 SSD
            { 
                id: 23, 
                name: "Samsung 990 PRO NVMe SSD 4TB", 
                category: "SSD", 
                price: 18999.00,
                oldPrice: null,
                image: "https://ecommerce.datablitz.com.ph/cdn/shop/files/f4s56gsa4g_500x.jpg?v=1760520700",
                specs: "NVMe Gen4, 7450 MB/s",
                rating: 4.9,
                reviews: 534,
                badge: "Hot"
            },
            { 
                id: 24, 
                name: "Kingston NV3 NVMe PCIe 4.0 SSD 1TB", 
                category: "SSD", 
                price: 5999.00,
                oldPrice: null,
                image: "https://ecommerce.datablitz.com.ph/cdn/shop/files/xcxcvvxcxc_500x.jpg?v=1729308697",
                specs: "Gen4 x4, 3500 MB/s",
                rating: 4.7,
                reviews: 312,
                badge: null
            },
            { 
                id: 25, 
                name: "Samsung 980 NVMe SSD 1TB", 
                category: "SSD", 
                price: 6499.00,
                oldPrice: null,
                image: "https://ecommerce.datablitz.com.ph/cdn/shop/files/arhsryng_500x.jpg?v=1756893534",
                specs: "NVMe Gen3, 3500 MB/s",
                rating: 4.8,
                reviews: 410,
                badge: "Best Seller"
            },
            { 
                id: 26, 
                name: "SanDisk SSD Plus SATA III 480GB", 
                category: "SSD", 
                price: 1999.00,
                oldPrice: null,
                image: "https://ecommerce.datablitz.com.ph/cdn/shop/files/f4s65gsa4d_500x.jpg?v=1759994223",
                specs: "SATA III, 535 MB/s",
                rating: 4.6,
                reviews: 287,
                badge: null
            },
            { 
                id: 27, 
                name: "ADATA SU650 SATA III SSD 512GB", 
                category: "SSD", 
                price: 2099.00,
                oldPrice: null,
                image: "https://ecommerce.datablitz.com.ph/cdn/shop/files/23_p_su650_01_0628_500x.jpg?v=1701074630",
                specs: "SATA III, 520 MB/s",
                rating: 4.5,
                reviews: 225,
                badge: null
            },
            { 
                id: 28, 
                name: "Crucial X10 Pro External SSD 1TB", 
                category: "SSD", 
                price: 7999.00,
                oldPrice: null,
                image: "https://ecommerce.datablitz.com.ph/cdn/shop/files/0649528938381_500x.jpg?v=1749028459",
                specs: "USB-C 10Gbps, Portable",
                rating: 4.8,
                reviews: 198,
                badge: "New"
            },
            { 
                id: 29, 
                name: "Patriot PBE SSD 240GB", 
                category: "SSD", 
                price: 1399.00,
                oldPrice: null,
                image: "https://i5.walmartimages.com/seo/Patriot-Burst-Elite-240GB-Internal-SSD-SATA-3-2-5-Solid-State-Drive-PBE240GS25SSDR_57b72c2a-aee1-4046-939b-a4b83de8b1f3.43aa4abaa9db900444db6186535eae9f.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
                specs: "SATA III, 450 MB/s",
                rating: 4.4,
                reviews: 154,
                badge: null
            },
            { 
                id: 30, 
                name: "ORICO C10 10Gbps Portable SSD 512GB", 
                category: "SSD", 
                price: 3499.00,
                oldPrice: null,
                image: "https://c1.neweggimages.com/productimage/nb1280/A1DSS2409110NPB8503.jpg",
                specs: "USB 3.2 Gen2, 10Gbps",
                rating: 4.7,
                reviews: 122,
                badge: null
            },
            { 
                id: 31, 
                name: "Crucial P3 Plus PCIe M.2 SSD 500GB", 
                category: "SSD", 
                price: 2899.00,
                oldPrice: null,
                image: "https://www.crucial.com/content/dam/crucial/ssd-products/p3-plus/digital-banners/gallery-images/en/crucial-p3-plus-ssd-gallery-image-5-micron-tested.jpg",
                specs: "Gen4 NVMe, 4700 MB/s",
                rating: 4.6,
                reviews: 231,
                badge: null
            },
            { 
                id: 32, 
                name: "WD SSD M.2 500GB", 
                category: "SSD", 
                price: 2699.00,
                oldPrice: null,
                image: "https://ecommerce.datablitz.com.ph/cdn/shop/files/vcgfdgfd_500x.jpg?v=1726126210",
                specs: "M.2 SATA, 545 MB/s",
                rating: 4.5,
                reviews: 178,
                badge: null
            },


            // HDD
            { 
                id: 33, 
                name: "Western Digital 1TB Harddisk Drive Blue", 
                category: "HDD", 
                price: 2399.00,
                oldPrice: null,
                image: "https://easypc.com.ph/cdn/shop/files/WesternDigital1tbHarddiskDriveBlue-b_2048x.jpg?v=1698993943",
                specs: "7200RPM, SATA III, 64MB Cache",
                rating: 4.6,
                reviews: 312,
                badge: null
            },
            { 
                id: 34, 
                name: "Western Digital 2TB Harddisk Drive Blue", 
                category: "HDD", 
                price: 3799.00,
                oldPrice: null,
                image: "https://ecommerce.datablitz.com.ph/cdn/shop/products/wd-blue-pc-desktop-hard-drive-2tb.png.wdthumb.1280.1280_057f7217-a4c1-49c6-ad88-bd1d7921892f.jpg?v=1676881266",
                specs: "7200RPM, SATA III, 64MB Cache",
                rating: 4.7,
                reviews: 284,
                badge: "Hot"
            },
            { 
                id: 35, 
                name: "Seagate Barracuda ST1000DM010 1TB Harddisk Drive", 
                category: "HDD", 
                price: 2599.00,
                oldPrice: null,
                image: "https://easypc.com.ph/cdn/shop/products/Seagate_Barracuda_ST1000DM010_1tb_7200RPM_64MB_Cache_Sata_Hard_disk_Drive-b_2048x.jpg?v=1706065340",
                specs: "7200RPM, SATA III, 64MB Cache",
                rating: 4.8,
                reviews: 340,
                badge: "Best Seller"
            },
            { 
                id: 36, 
                name: "Seagate ST2000DM008 2TB Sata Harddisk Drive", 
                category: "HDD", 
                price: 3899.00,
                oldPrice: null,
                image: "https://ecommerce.datablitz.com.ph/cdn/shop/files/bdfbdfdbfd_f45afb29-dc98-495f-ab4f-00b20fc18b62_1024x.jpg?v=1719541858",
                specs: "7200RPM, SATA III, 64MB Cache",
                rating: 4.7,
                reviews: 298,
                badge: null
            },
            { 
                id: 37, 
                name: "Seagate 1TB ST1000DM014 Harddisk Drive", 
                category: "HDD", 
                price: 2699.00,
                oldPrice: null,
                image: "https://easypc.com.ph/cdn/shop/files/Seagate_1tb_ST1000DM014-a_2048x.png?v=1698206509",
                specs: "7200RPM, SATA III, 64MB Cache",
                rating: 4.6,
                reviews: 189,
                badge: null
            },
            { 
                id: 38, 
                name: "Seagate Harddisk Drive 320GB", 
                category: "HDD", 
                price: 999.00,
                oldPrice: null,
                image: "https://easypc.com.ph/cdn/shop/products/7-a_2048x.jpg?v=1588505802",
                specs: "7200RPM, SATA II",
                rating: 4.3,
                reviews: 145,
                badge: null
            },
            { 
                id: 39, 
                name: "Western Digital 2TB Harddisk Drive Black", 
                category: "HDD", 
                price: 4299.00,
                oldPrice: null,
                image: "https://dynaquestpc.com/cdn/shop/products/Western_Digital_WD_Caviar_Black_2TB_64mb_WD2003FZEX_Sata3_7a22721d-a377-484e-99d2-c3155e156e5d.jpg?v=1571553172&width=259",
                specs: "7200RPM, SATA III, 64MB Cache",
                rating: 4.8,
                reviews: 243,
                badge: "Premium"
            },
            { 
                id: 40, 
                name: "Western Digital 1TB Harddisk Drive Black", 
                category: "HDD", 
                price: 2899.00,
                oldPrice: null,
                image: "https://easypc.com.ph/cdn/shop/products/Western_Digital_1tb_Harddisk_Drive_Black-b_2048x.jpg?v=1700452736",
                specs: "7200RPM, SATA III, 64MB Cache",
                rating: 4.7,
                reviews: 201,
                badge: null
            },
            { 
                id: 41, 
                name: "Toshiba 500GB Harddisk Drive", 
                category: "HDD", 
                price: 1699.00,
                oldPrice: null,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCze5ovXKJlncz-PDcpq49LXejMT7zX48m4Q&s",
                specs: "7200RPM, SATA III",
                rating: 4.4,
                reviews: 128,
                badge: null
            },
            { 
                id: 42, 
                name: "Western Digital 3TB Harddisk Drive Blue", 
                category: "HDD", 
                price: 4999.00,
                oldPrice: null,
                image: "https://easypc.com.ph/cdn/shop/products/612-a_2048x.jpg?v=1588506354",
                specs: "7200RPM, SATA III, 64MB Cache",
                rating: 4.7,
                reviews: 212,
                badge: null
            },
            { 
                id: 43, 
                name: "Seagate Skyhawk ST6000VX001 6TB Hard Disk Drive", 
                category: "HDD", 
                price: 7899.00,
                oldPrice: null,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCdwWxdngc3hgyx53IjH-vqUr5YVZFU9QUkg&s",
                specs: "7200RPM, Surveillance, 256MB Cache",
                rating: 4.9,
                reviews: 175,
                badge: "New"
            },
            { 
                id: 44, 
                name: "Western Digital 8TB Surveillance Harddisk Drive Purple", 
                category: "HDD", 
                price: 10999.00,
                oldPrice: null,
                image: "https://easypc.com.ph/cdn/shop/products/Western_Digital_8tb_Surveillance-b_2048x.jpg?v=1700721159",
                specs: "5400RPM, SATA III, 256MB Cache",
                rating: 4.9,
                reviews: 289,
                badge: "Premium"
            },

            // PSU
            { 
                id: 45, 
                name: "Corsair RM850x 850W 80+ Gold Fully Modular", 
                category: "PSU", 
                price: 9299.00,
                oldPrice: null,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnOn4JxmS51e-I8k_pJXy2zNki5mtF3sa1A&s",
                specs: "850W, 80+ Gold, Fully Modular, ATX",
                rating: 4.9,
                reviews: 356,
                badge: "Premium"
            },
            { 
                id: 46, 
                name: "Seasonic Focus GX-750 750W 80+ Gold Fully Modular", 
                category: "PSU", 
                price: 7999.00,
                oldPrice: null,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8mDVqT4rAWApr2X6vOVSWloj66DUPlvnLQ&s",
                specs: "750W, 80+ Gold, Fully Modular, ATX",
                rating: 4.8,
                reviews: 298,
                badge: "Best Seller"
            },
            { 
                id: 47, 
                name: "Cooler Master MWE 650 Bronze V2 650W 80+ Bronze", 
                category: "PSU", 
                price: 3999.00,
                oldPrice: null,
                image: "https://ecommerce.datablitz.com.ph/cdn/shop/files/mwe-650-bronze-v2-230v-gallery-1-zoom.jpg?v=1715323887",
                specs: "650W, 80+ Bronze, Non-Modular, ATX",
                rating: 4.6,
                reviews: 210,
                badge: null
            },
            { 
                id: 48, 
                name: "Thermaltake Toughpower GF1 850W 80+ Gold", 
                category: "PSU", 
                price: 7499.00,
                oldPrice: null,
                image: "https://bermorzone.com.ph/wp-content/uploads/2024/03/Thermaltake-Toughpower-GF-A3-TT-Premium-Edition-80-Plus-650W-btz-ph-1.webp",
                specs: "850W, 80+ Gold, Fully Modular, ATX",
                rating: 4.8,
                reviews: 232,
                badge: "Hot"
            },
            { 
                id: 49, 
                name: "EVGA SuperNOVA 750 G5 750W 80+ Gold", 
                category: "PSU", 
                price: 7299.00,
                oldPrice: null,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRg9vLODcfIS8ghW44La7gUXfKZ-hyaxy79g&s",
                specs: "750W, 80+ Gold, Fully Modular, ATX",
                rating: 4.7,
                reviews: 188,
                badge: null
            },
            { 
                id: 50, 
                name: "ASUS TUF Gaming 650W Bronze 80+ Bronze", 
                category: "PSU", 
                price: 4599.00,
                oldPrice: null,
                image: "https://dlcdnwebimgs.asus.com/gain/2323beee-0d84-4527-a85b-f6d5bad66c54/",
                specs: "650W, 80+ Bronze, Non-Modular, ATX",
                rating: 4.6,
                reviews: 179,
                badge: null
            },
            { 
                id: 51, 
                name: "FSP Hydro G Pro 850W 80+ Gold", 
                category: "PSU", 
                price: 7999.00,
                oldPrice: null,
                image: "https://www.fsplifestyle.com/upload/Hydro_G_Pro/s02_psu.png",
                specs: "850W, 80+ Gold, Fully Modular, ATX",
                rating: 4.8,
                reviews: 205,
                badge: "Premium"
            },
            { 
                id: 52, 
                name: "NZXT C750 750W 80+ Gold Modular", 
                category: "PSU", 
                price: 7499.00,
                oldPrice: null,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaCIK5-jrYcosx_neUpZQ8HtCDLth6vMAdsA&s",
                specs: "750W, 80+ Gold, Semi-Modular, ATX",
                rating: 4.7,
                reviews: 164,
                badge: null
            },
            { 
                id: 53, 
                name: "Be Quiet! Pure Power 12M 850W 80+ Gold ATX 3.0", 
                category: "PSU", 
                price: 8799.00,
                oldPrice: null,
                image: "https://bermorzone.com.ph/wp-content/uploads/2023/08/be-quiet-pure-power-12-m-850w-1000w-1200w-80-plus-gold-btz-ph-1-scaled.webp",
                specs: "850W, 80+ Gold, Fully Modular, ATX 3.0",
                rating: 4.9,
                reviews: 197,
                badge: "New"
            },
            { 
                id: 54, 
                name: "Antec NeoECO 650W 80+ Bronze Semi-Modular", 
                category: "PSU", 
                price: 4299.00,
                oldPrice: null,
                image: "https://www.antec.com/product/power/images/neo-eco-modular-v2-pdt11.png",
                specs: "650W, 80+ Bronze, Semi-Modular, ATX",
                rating: 4.5,
                reviews: 155,
                badge: null
            },

        ];

            
            

        let currentFilter = 'all';
        let currentSort = 'featured';

        // Render products
        function renderProducts(filter = 'all', sort = 'featured') {
            const grid = document.getElementById('productGrid');
            if (!grid) return;
            
            let filtered = filter === 'all' ? [...products] : products.filter(p => p.category === filter);
            
            // Sort products
            switch(sort) {
                case 'price-low':
                    filtered.sort((a, b) => a.price - b.price);
                    break;
                case 'price-high':
                    filtered.sort((a, b) => b.price - a.price);
                    break;
                case 'name':
                    filtered.sort((a, b) => a.name.localeCompare(b.name));
                    break;
            }
            
            grid.innerHTML = filtered.map(product => `
                <div class="product-card">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}" class="product-img">
                        ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                    </div>
                    <div class="product-info">
                        <div class="product-category">${product.category}</div>
                        <h3 class="product-title">${product.name}</h3>
                        <div class="product-specs">${product.specs}</div>
                        <div class="product-rating">
                            <span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</span>
                            <span class="rating-count">(${product.reviews})</span>
                        </div>
                        <div class="product-price">
                            ₱${product.price.toFixed(2)}
                            ${product.oldPrice ? `<span class="old-price">₱${product.oldPrice.toFixed(2)}</span>` : ''}
                        </div>
                        <div class="product-actions">
                            <button class="add-to-cart" onclick="addProductToCart(${product.id})">Add to Cart</button>
                            <button class="wishlist-btn" onclick="addToWishlist(${product.id})">♡</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Add product to cart
        function addProductToCart(productId) {
            const product = products.find(p => p.id === productId);
            if (!product) {
                showNotification('Product not found!');
                return;
            }
            
            const cartItem = {
                id: product.id,
                name: product.name,
                category: product.category,
                price: product.price,
                image: product.image
            };
            
            if (typeof window.addToCart === 'function') {
                window.addToCart(cartItem);
            } else {
                showNotification('Cart system not available. Please refresh the page.');
            }
        }

        // Add to wishlist
        function addToWishlist(productId) {
            const product = products.find(p => p.id === productId);
            if (product) {
                showNotification(`${product.name} added to wishlist!`);
            }
        }

        // Filter by category
        function filterByCategory(category, btn) {
            currentFilter = category;
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            if (btn && btn.classList) btn.classList.add('active');
            renderProducts(category, currentSort);
        }

        // Sort products
        function sortProducts(sortType) {
            currentSort = sortType;
            renderProducts(currentFilter, sortType);
        }

        // Search functionality
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase();
                const filtered = products.filter(p => 
                    p.name.toLowerCase().includes(query) || 
                    p.category.toLowerCase().includes(query) ||
                    p.specs.toLowerCase().includes(query)
                );
                
                const grid = document.getElementById('productGrid');
                if (!grid) return;
                
                grid.innerHTML = filtered.map(product => `
                    <div class="product-card">
                        <div class="product-image">
                            <img src="${product.image}" alt="${product.name}" class="product-img">
                            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                        </div>
                        <div class="product-info">
                            <div class="product-category">${product.category}</div>
                            <h3 class="product-title">${product.name}</h3>
                            <div class="product-specs">${product.specs}</div>
                            <div class="product-rating">
                                <span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</span>
                                <span class="rating-count">(${product.reviews})</span>
                            </div>
                            <div class="product-price">
                                ₱${product.price.toFixed(2)}
                                ${product.oldPrice ? `<span class="old-price">₱${product.oldPrice.toFixed(2)}</span>` : ''}
                            </div>
                            <div class="product-actions">
                                <button class="add-to-cart" onclick="addProductToCart(${product.id})">Add to Cart</button>
                                <button class="wishlist-btn" onclick="addToWishlist(${product.id})">♡</button>
                            </div>
                        </div>
                    </div>
                `).join('');
            });
        }

        // Initialize products
        renderProducts();