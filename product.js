 // All Products Data (using images instead of icons)
        const products = [
            // 🧠 CPU
            { 
                id: 1, 
                name: "Intel Core i9-14900K", 
                category: "CPU", 
                price: 35999.00,
                oldPrice: null,
                image: "https://ecommerce.datablitz.com.ph/cdn/shop/files/19-118-462-01_500x.jpg?v=1760516372",
                specs: "24 Cores, 32 Threads, up to 6.0GHz, LGA1700",
                rating: 4.9,
                reviews: 421,
                badge: "Flagship"
            },
            { 
                id: 2, 
                name: "Intel Core i7-14700K", 
                category: "CPU", 
                price: 28999.00,
                oldPrice: null,
                image: "https://ecommerce.datablitz.com.ph/cdn/shop/files/19-118-466-05_500x.jpg?v=1760520418",
                specs: "20 Cores, 28 Threads, up to 5.6GHz, LGA1700",
                rating: 4.8,
                reviews: 312,
                badge: "Best Seller"
            },
            { 
                id: 3, 
                name: "Intel Core i7-12700F", 
                category: "CPU", 
                price: 15999.00,
                oldPrice: null,
                image: "https://ecommerce.datablitz.com.ph/cdn/shop/products/19-118-359-03_700x.jpg?v=1676876036",
                specs: "12 Cores, 20 Threads, up to 4.9GHz, LGA1700",
                rating: 4.7,
                reviews: 221,
                badge: null
            },
            { 
                id: 4, 
                name: "Intel Core i5-14600K", 
                category: "CPU", 
                price: 18999.00,
                oldPrice: null,
                image: "https://ecommerce.datablitz.com.ph/cdn/shop/files/19-118-470-07_700x.jpg?v=1697683583",
                specs: "14 Cores, 20 Threads, up to 5.3GHz, LGA1700",
                rating: 4.8,
                reviews: 267,
                badge: "Popular"
            },
            { 
                id: 5, 
                name: "Intel Core i7-9700K", 
                category: "CPU", 
                price: 9999.00,
                oldPrice: null,
                image: "https://gw.alicdn.com/imgextra/TB1i0nzHUY1gK0jSZFMXXaWcVXa.jpg_540x540.jpg",
                specs: "8 Cores, 8 Threads, up to 4.9GHz, LGA1151",
                rating: 4.6,
                reviews: 198,
                badge: "Classic"
            },
            { 
                id: 6, 
                name: "Intel Core i7-8700", 
                category: "CPU", 
                price: 8499.00,
                oldPrice: null,
                image: "https://easypc.com.ph/cdn/shop/products/875-a_2048x.jpg?v=1588506623",
                specs: "6 Cores, 12 Threads, up to 4.6GHz, LGA1151",
                rating: 4.6,
                reviews: 173,
                badge: null
            },
            { 
                id: 7, 
                name: "AMD Ryzen 9 9950X", 
                category: "CPU", 
                price: 38999.00,
                oldPrice: null,
                image: "https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/2613900-ryzen-9-9950x.jpg",
                specs: "16 Cores, 32 Threads, up to 5.7GHz, AM5",
                rating: 4.9,
                reviews: 254,
                badge: "Flagship"
            },
            { 
                id: 8, 
                name: "AMD Ryzen 9 7900X3D", 
                category: "CPU", 
                price: 30999.00,
                oldPrice: null,
                image: "https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/2505503-ryzen-9-7900x3d.jpg",
                specs: "12 Cores, 24 Threads, 3D V-Cache, AM5",
                rating: 4.8,
                reviews: 289,
                badge: "Premium"
            },
            { 
                id: 9, 
                name: "AMD Ryzen 7 7800X3D", 
                category: "CPU", 
                price: 24999.00,
                oldPrice: null,
                image: "https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/2505503-ryzen-7-7800x3d.jpg",
                specs: "8 Cores, 16 Threads, 3D V-Cache, AM5",
                rating: 4.9,
                reviews: 356,
                badge: "Best Seller"
            },
            { 
                id: 10, 
                name: "AMD Ryzen 7 5800X3D", 
                category: "CPU", 
                price: 19999.00,
                oldPrice: null,
                image: "https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/2505503-ryzen-7-5800x3d.jpg",
                specs: "8 Cores, 16 Threads, 3D V-Cache, AM4",
                rating: 4.8,    
                reviews: 407,
                badge: "Popular"
            },


            // 🎮 GPU
            { 
                id: 11, 
                name: "NVIDIA GeForce RTX 5090", 
                category: "GPU", 
                price: 184999.00,
                oldPrice: null,
                image: "https://ecommerce.datablitz.com.ph/cdn/shop/files/fbfddfbdfbfdbbfd_800x.jpg?v=1741135515",
                specs: "24GB GDDR7, DLSS 4, Ray Tracing, PCIe 5.0",
                rating: 4.9,
                reviews: 312,
                badge: "Flagship"
            },
            { 
                id: 12, 
                name: "AMD Radeon RX 9070 XT", 
                category: "GPU", 
                price: 99999.00,
                oldPrice: null,
                image: "https://ecommerce.datablitz.com.ph/cdn/shop/files/fsdfbbsdbsdbsd_800x.jpg?v=1741340219",
                specs: "20GB GDDR7, RDNA 4, Ray Tracing",
                rating: 4.8,
                reviews: 187,
                badge: "New"
            },
            { 
                id: 13, 
                name: "AMD Radeon RX 9060 XT 16GB", 
                category: "GPU", 
                price: 74999.00,
                oldPrice: null,
                image: "https://ecommerce.datablitz.com.ph/cdn/shop/files/unnamed_11_e2e8163c-0e5e-4ff4-a71f-759393dd9b30_800x.jpg?v=1749729468",
                specs: "16GB GDDR6, RDNA 4, PCIe 5.0",
                rating: 4.7,
                reviews: 142,
                badge: null
            },
            { 
                id: 14, 
                name: "NVIDIA GeForce RTX 5070", 
                category: "GPU", 
                price: 67999.00,
                oldPrice: null,
                image: "https://ecommerce.datablitz.com.ph/cdn/shop/files/unnamed-2025-03-05T180941.892_800x.jpg?v=1750243484",
                specs: "16GB GDDR7, DLSS 4, Ray Tracing",
                rating: 4.8,
                reviews: 204,
                badge: "Popular"
            },
            { 
                id: 15, 
                name: "NVIDIA GeForce RTX 5070 Ti", 
                category: "GPU", 
                price: 78999.00,
                oldPrice: null,
                image: "https://ecommerce.datablitz.com.ph/cdn/shop/files/GeForceRTX_5070TiEAGLEOCSFF16G-11_800x.jpg?v=1740120230",
                specs: "16GB GDDR7, DLSS 4, Ray Tracing",
                rating: 4.8,
                reviews: 189,
                badge: "Best Seller"
            },
            { 
                id: 16, 
                name: "NVIDIA GeForce RTX 5060", 
                category: "GPU", 
                price: 42999.00,
                oldPrice: null,
                image: "https://ecommerce.datablitz.com.ph/cdn/shop/files/sdghnfcyh_800x.jpg?v=1747732447",
                specs: "12GB GDDR6, DLSS 4, Ray Tracing",
                rating: 4.6,
                reviews: 256,
                badge: null
            },
            { 
                id: 17, 
                name: "NVIDIA GeForce RTX 5080", 
                category: "GPU", 
                price: 124999.00,
                oldPrice: null,
                image: "https://asset.msi.com/resize/image/global/product/product_173710004234f04a0f44dd01f025e8bee23592ca90.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
                specs: "20GB GDDR7, DLSS 4, PCIe 5.0",
                rating: 4.9,
                reviews: 331,
                badge: "Premium"
            },
            { 
                id: 18, 
                name: "NVIDIA GeForce RTX 3060 12GB", 
                category: "GPU", 
                price: 18999.00,
                oldPrice: null,
                image: "https://easypc.com.ph/cdn/shop/products/MSI_RTX_3060_Ventus_2X_OC-a_2048x.jpg?v=1697068614",
                specs: "12GB GDDR6, DLSS 3, Ray Tracing",
                rating: 4.7,
                reviews: 492,
                badge: "Budget Pick"
            },
            { 
                id: 19, 
                name: "NVIDIA GeForce RTX 4090", 
                category: "GPU", 
                price: 132999.00,
                oldPrice: null,
                image: "https://bermorzone.com.ph/wp-content/uploads/2022/09/rtx-4090-rog-strix_ph-btz.webp",
                specs: "24GB GDDR6X, DLSS 3.5, PCIe 5.0",
                rating: 4.9,
                reviews: 517,
                badge: "Premium"
            },
            { 
                id: 20, 
                name: "NVIDIA GeForce GTX 1660 SUPER", 
                category: "GPU", 
                price: 12999.00,
                oldPrice: null,
                image: "https://bermorzone.com.ph/wp-content/uploads/2019/11/14-932-224-V06.jpg",
                specs: "6GB GDDR6, Turing Architecture",
                rating: 4.7,
                reviews: 611,
                badge: "Classic"
            },


            // 💾 RAM
            {
                id: 21,
                name: "Corsair Vengeance LPX 16GB DDR4 3200MHz",
                category: "RAM",
                price: 2999.00,
                oldPrice: null,
                image: "https://assets.corsair.com/image/upload/c_pad,q_85,h_1100,w_1100,f_auto/products/Memory/CMK16GX4M2B3200C16/Gallery/VENG_LPX_BLK_01.webp",
                specs: "16GB (2x8GB) DDR4, 3200MHz, CL16, Black",
                rating: 4.8,
                reviews: 215,
                badge: "Best Seller"
            },
            {
                id: 22,
                name: "Kingston Fury Beast 16GB DDR4 3600MHz",
                category: "RAM",
                price: 3199.00,
                oldPrice: null,
                image: "https://maximumhardware.store/image/cache/catalog/Kingston/A4YUD210826116E1L-1000x1000w.jpg",
                specs: "16GB (2x8GB) DDR4, 3600MHz, CL17",
                rating: 4.7,
                reviews: 182,
                badge: "Popular"
            },
            {
                id: 23,
                name: "G.Skill Trident Z RGB 32GB DDR4 3600MHz",
                category: "RAM",
                price: 6999.00,
                oldPrice: null,
                image: "https://www.gskill.com/_upload/images/156282399310.png",
                specs: "32GB (2x16GB) DDR4, 3600MHz, RGB Lighting",
                rating: 4.9,
                reviews: 241,
                badge: "Premium"
            },
            {
                id: 24,
                name: "Corsair Vengeance RGB Pro 32GB DDR4 3200MHz",
                category: "RAM",
                price: 6699.00,
                oldPrice: null,
                image: "https://assets.corsair.com/image/upload/c_pad,q_85,h_1100,w_1100,f_auto/products/Memory/CMW32GX4M2E3200C16/Gallery/Vengeance_RGB_Pro_02.webp",
                specs: "32GB (2x16GB) DDR4, 3200MHz, RGB, CL16",
                rating: 4.8,
                reviews: 228,
                badge: "RGB"
            },
            {
                id: 25,
                name: "TeamGroup T-Force Delta RGB 16GB DDR5 6000MHz",
                category: "RAM",
                price: 4799.00,
                oldPrice: null,
                image: "https://images.teamgroupinc.com/products/memory/u-dimm/ddr5/delta-rgb/white/03.jpg",
                specs: "16GB (2x8GB) DDR5, 6000MHz, RGB, White",
                rating: 4.9,
                reviews: 192,
                badge: "New Arrival"
            },
            {
                id: 26,
                name: "Crucial DDR5 32GB 5600MHz",
                category: "RAM",
                price: 6499.00,
                oldPrice: null,
                image: "https://imgs.search.brave.com/z4bbYTtE9BrJHBhGexP8X2ZHYGRd4Ch-KgHsx30cA1k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxZUxjcnRuODBM/LmpwZw",
                specs: "32GB (2x16GB) DDR5, 5600MHz, CL46",
                rating: 4.7,
                reviews: 134,
                badge: null
            },
            {
                id: 27,
                name: "ADATA XPG Lancer RGB 32GB DDR5 6000MHz",
                category: "RAM",
                price: 6999.00,
                oldPrice: null,
                image: "https://imgs.search.brave.com/YAHACIcOeZTOszwAb5JE5r4dAymfUihhjFeC43W85zo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbmZv/bWF4cGFyaXMuY29t/LzI0MzI5LW1lZGl1/bV9kZWZhdWx0L2Fk/YXRhLXhwZy1sYW5j/ZXItcmdiLWRkcjUt/MngxNmdiLTYwMDBj/MzAtbm9pci5qcGc",
                specs: "32GB (2x16GB) DDR5, 6000MHz, RGB, CL40",
                rating: 4.8,
                reviews: 176,
                badge: "RGB"
            },
            {
                id: 28,
                name: "Patriot Viper Steel 16GB DDR4 4000MHz",
                category: "RAM",
                price: 3799.00,
                oldPrice: null,
                image: "https://m.media-amazon.com/images/I/71U2arsvsUL._UF1000,1000_QL80_.jpg",
                specs: "16GB (2x8GB) DDR4, 4000MHz, CL19",
                rating: 4.6,
                reviews: 103,
                badge: "High Speed"
            },
            {
                id: 29,
                name: "Kingston Fury Renegade 32GB DDR5 6400MHz",
                category: "RAM",
                price: 7599.00,
                oldPrice: null,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWO0C0Cy7h6t8AuYnul5hix-XC8Gnk-jM5Dg&s",
                specs: "32GB (2x16GB) DDR5, 6400MHz, CL32",
                rating: 4.9,
                reviews: 188,
                badge: "Performance"
            },
            {
                id: 30,
                name: "G.Skill Ripjaws S5 32GB DDR5 6000MHz",
                category: "RAM",
                price: 6999.00,
                oldPrice: null,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfw5PGyL1uNIWwYfraysAssQOOkIqLVhUyiw&s",
                specs: "32GB (2x16GB) DDR5, 6000MHz, CL36, Low Profile",
                rating: 4.8,
                reviews: 204,
                badge: "Popular"
            },

            
            // 🖥️ Motherboard
            { 
                id: 31, 
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
                id: 32, 
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
                id: 33, 
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
                id: 34, 
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
                id: 35, 
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
                id: 36, 
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
                id: 37, 
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
                id: 38, 
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
                id: 39, 
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
                id: 40, 
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



            // 💿 SSD
            { 
                id: 41, 
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
                id: 42, 
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
                id: 43, 
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
                id: 44, 
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
                id: 45, 
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
                id: 46, 
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
                id: 47, 
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
                id: 48, 
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
                id: 49, 
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
                id: 50, 
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
                id: 51, 
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
                id: 52, 
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
                id: 53, 
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
                id: 54, 
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
                id: 55, 
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
                id: 56, 
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
                id: 57, 
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
                id: 58, 
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
                id: 59, 
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
                id: 60, 
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
                id: 61, 
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
                id: 62, 
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
                id: 63, 
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
                id: 64, 
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
                id: 65, 
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
                id: 66, 
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
                id: 67, 
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
                id: 68, 
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
                id: 69, 
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
                id: 70, 
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
                id: 71, 
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
                id: 72, 
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
            { 
                id: 73, 
                name: "RAKK DASIG X3 Ambidextrous Hotswap Trimode RGB Gaming Mouse (White)", 
                category: "Peripherals", 
                price: 1499.00, 
                oldPrice: 1799.00,
                image: "https://easypc.com.ph/cdn/shop/files/10488-a_2048x.png?v=1761609543",
                specs: "Trimode | PAW3311 Sensor | Huano 80M Switch | RGB Lighting | 16000 DPI",
                rating: 4.8,
                reviews: 254,
                badge: "Hot"
            },
            { 
                id: 74, 
                name: "RAKK Alti BVR / RGY Illuminated Gaming Mouse", 
                category: "Peripherals", 
                price: 899.00, 
                oldPrice: 1099.00,
                image: "https://rakk.ph/wp-content/uploads/2023/05/716-c.jpg",
                specs: "Ergonomic Design | RGB Lighting | 6 Buttons | 7200 DPI",
                rating: 4.6,
                reviews: 183,
                badge: "Sale"
            },
            { 
                id: 75, 
                name: "RAKK Kaptan RGB Black/White Gaming Mouse", 
                category: "Peripherals", 
                price: 799.00,
                oldPrice: 999.00,
                image: "https://easypc.com.ph/cdn/shop/products/1185-a_866995d0-1e8c-4811-b54a-dddaa094fb10_2048x.jpg?v=1635218506",
                specs: "RGB Lighting | Adjustable DPI | Lightweight | USB Interface",
                rating: 4.7,
                reviews: 210,
                badge: "Best Seller"
            },
            { 
                id: 76, 
                name: "Logitech G403 Hero RGB Gaming Mouse", 
                category: "Peripherals", 
                price: 2899.00,
                oldPrice: 3499.00,
                image: "https://ecommerce.datablitz.com.ph/cdn/shop/files/dasd_800x.jpg?v=1705569240",
                specs: "HERO Sensor | 16000 DPI | RGB | 6 Programmable Buttons",
                rating: 4.9,
                reviews: 470,
                badge: "Top Rated"
            },
            { 
                id: 77, 
                name: "Logitech G502 Hero Gaming Mouse", 
                category: "Peripherals", 
                price: 3699.00,
                oldPrice: 4199.00,
                image: "https://www.henryscameraphoto.com/image/cache/catalog/LOGITECH/GAMING-MOUSE/G502/logitech-g502-1-800x800.jpg",
                specs: "HERO 25K Sensor | 11 Buttons | Adjustable Weights | RGB Lighting",
                rating: 4.9,
                reviews: 835,
                badge: "Pro"
            },
            { 
                id: 78, 
                name: "SteelSeries Rival 3 62513 Gaming Mouse (Black)", 
                category: "Peripherals", 
                price: 1999.00,
                oldPrice: 2299.00,
                image: "https://ecommerce.datablitz.com.ph/cdn/shop/files/1000000006411.jpg?v=1729325907",
                specs: "TrueMove Core Sensor | 8500 DPI | RGB Lighting | Durable Switches",
                rating: 4.8,
                reviews: 329,
                badge: "Popular"
            },
        
            // ⌨️ KEYBOARD
            { 
                id: 79, 
                name: "RAKK SINAG PRO Trimode Gasket Mount 1.4\" TFT Screen 96 Keys Mechanical Keyboard (White)", 
                category: "Peripherals", 
                price: 4799.00,
                oldPrice: 5299.00,
                image: "https://easypc.com.ph/cdn/shop/files/RAKK_SINAG_PRO_Trimode_Gasket_Mount_1.4_TFT_Screen_96_Keys_Mechanical_Keyboard_White-a_2048x.png?v=1721779868",
                specs: "Trimode | Gasket Mount | RGB | TFT Display | Hot-swappable",
                rating: 4.9,
                reviews: 187,
                badge: "New"
            },
            { 
                id: 80, 
                name: "Royal Kludge RK61 Plus Trimode Brown Switch Mechanical Keyboard (Black/Indigo)", 
                category: "Peripherals", 
                price: 2899.00,
                oldPrice: 3199.00,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjS56mRV01zd1STfbICf_vRHWB5xQPZ5l2BQ&s",
                specs: "Compact 61 Keys | Trimode | RGB | Brown Switches | Wireless",
                rating: 4.7,
                reviews: 315,
                badge: "Best Seller"
            },
            { 
                id: 81, 
                name: "Redragon K652GG-RGB-PRO AZURE Mechanical Keyboard", 
                category: "Peripherals", 
                price: 2499.00,
                oldPrice: 2799.00,
                image: "https://ecommerce.datablitz.com.ph/cdn/shop/files/8909.719.jpg?v=1682825112",
                specs: "RGB Backlit | Hot-Swappable | Compact | Blue Switches",
                rating: 4.8,
                reviews: 223,
                badge: "Hot"
            },
            { 
                id: 82, 
                name: "Aula F2183 TKL RGB Gaming Mechanical Hotswappable Keyboard", 
                category: "Peripherals", 
                price: 1799.00,
                oldPrice: 1999.00,
                image: "https://easypc.com.ph/cdn/shop/files/AulaF2183TKLRGBGamingMechanicalHotswappableKeyboard_4_2048x.png?v=1729664734",
                specs: "Tenkeyless | RGB | Hot-Swappable | Wired | Compact Design",
                rating: 4.6,
                reviews: 144,
                badge: "Sale"
            },
            { 
                id: 83, 
                name: "RAKK LAM-ANG PRO MAX 87 Keys RGB Trimode Universal Hotswap Keyboard (White)", 
                category: "Peripherals", 
                price: 3699.00,
                oldPrice: 3999.00,
                image: "https://easypc.com.ph/cdn/shop/files/RAKK_LAM-ANG_PRO_MAX_87_Keys_RGB_Trimode_Universal_Hotswap_Cherry_Keycaps_White-b_2048x.png?v=1726466978",
                specs: "87 Keys | RGB | Trimode | Hot-Swap | Cherry Profile Keycaps",
                rating: 4.8,
                reviews: 262,
                badge: "Featured"
            },
        
            // 🎧 HEADPHONES
            { 
                id: 84, 
                name: "Redragon H878WB Skuld Pro Lightweight Wireless Gaming Headset (Blue)", 
                category: "Peripherals", 
                price: 2699.00,
                oldPrice: 2999.00,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqE-D1C1t1rGpRC9eRJVEGUePOModEI2-78w&s",
                specs: "Wireless | Lightweight | Noise Reduction | RGB | Long Battery Life",
                rating: 4.7,
                reviews: 134,
                badge: "New"
            },
            { 
                id: 85, 
                name: "RAKK HUNI Wired RGB Gaming Headset (Black/White)", 
                category: "Peripherals", 
                price: 1399.00,
                oldPrice: 1599.00,
                image: "https://easypc.com.ph/cdn/shop/products/RAKK_HUNI_Wired_Gaming_Headset_RGB_Black-a_2048x.jpg?v=1704767133",
                specs: "Wired | RGB Lighting | Soft Cushions | Adjustable Mic",
                rating: 4.6,
                reviews: 289,
                badge: "Sale"
            },
            { 
                id: 86, 
                name: "Corsair Void Pro 7.1 Premium Gaming Headset (Black)", 
                category: "Peripherals", 
                price: 4499.00,
                oldPrice: 4999.00,
                image: "https://easypc.com.ph/cdn/shop/products/855-a_2048x.jpg?v=1588506603",
                specs: "7.1 Surround | Noise Cancelling Mic | Memory Foam Earpads",
                rating: 4.9,
                reviews: 502,
                badge: "Pro"
            },
            { 
                id: 87, 
                name: "Corsair HS50 Stereo Gaming Headset (Green)", 
                category: "Peripherals", 
                price: 3199.00,
                oldPrice: 3499.00,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH4-U_P7TCKRAFr1l8OzatFNBZ8j_M7MZJ1w&s",
                specs: "Stereo Sound | Detachable Mic | Adjustable Fit | Comfortable Padding",
                rating: 4.8,
                reviews: 193,
                badge: "Classic"
            },
            { 
                id: 88, 
                name: "Corsair HS50 Stereo Gaming Headset (Blue)", 
                category: "Peripherals", 
                price: 3199.00,
                oldPrice: 3499.00,
                image: "https://easypc.com.ph/cdn/shop/products/858-a_2048x.jpg?v=1588506610",
                specs: "Stereo Sound | Detachable Mic | Comfortable Design | Durable Build",
                rating: 4.8,
                reviews: 211,
                badge: "Popular"
            },
            

        ];

            
            

        let currentFilter = 'all';
        let currentSort = 'featured';
        let wishlist = [];

        // ✅ Format number with comma and two decimals
        function formatPrice(value) {
            return value.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }

        // ✅ Update wishlist count
        function updateWishlistCount() {
            const elements = document.querySelectorAll('#wishlistCount');
            elements.forEach(el => el.textContent = wishlist.length);
        }

        // ✅ Save / Load Wishlist
        function saveWishlist() {
            localStorage.setItem('techforge_wishlist', JSON.stringify(wishlist));
        }

        function loadWishlist() {
            const saved = localStorage.getItem('techforge_wishlist');
            if (saved) wishlist = JSON.parse(saved);
            updateWishlistCount();
        }

        // ✅ Add to wishlist
        function addToWishlist(productId) {
            const product = products.find(p => p.id === productId);
            if (!product) {
                showNotification('Product not found!');
                return;
            }

            // Check if already in wishlist
            if (wishlist.some(item => item.id === product.id)) {
                showNotification(`${product.name} is already in your wishlist!`);
                return;
            }

            wishlist.push(product);
            saveWishlist();
            updateWishlistCount();
            showNotification(`${product.name} added to wishlist!`);
            renderWishlist();
        }

        // ✅ Remove from wishlist
        function removeFromWishlist(id) {
            wishlist = wishlist.filter(item => item.id !== id);
            saveWishlist();
            updateWishlistCount();
            renderWishlist();
        }

        // ✅ Render Wishlist Modal
        function renderWishlist() {
            const modalBody = document.getElementById('wishlistBody');
            if (!modalBody) return;

            if (wishlist.length === 0) {
                modalBody.innerHTML = `
                    <div class="empty-cart">
                        <div class="empty-cart-icon">💔</div>
                        <h3>Your wishlist is empty</h3>
                        <p>Start adding your favorite items!</p>
                    </div>
                `;
                return;
            }

            modalBody.innerHTML = wishlist.map(item => `
                <div class="cart-item">
                    <div class="cart-item-image">
                        <img src="${item.image || 'https://via.placeholder.com/80'}" alt="${item.name}">
                    </div>
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-category">${item.category}</div>
                        <div class="cart-item-price">₱${formatPrice(item.price || 0)}</div>
                    </div>
                    <div class="cart-item-actions">
                        <button class="add-to-cart" onclick='addToCart(${JSON.stringify({
                            id: item.id,
                            name: item.name,
                            category: item.category,
                            price: item.price,
                            image: item.image
                        })})'>Add to Cart</button>
                        <button class="remove-btn" onclick="removeFromWishlist(${item.id})">Remove</button>
                    </div>
                </div>
            `).join('');
        }

        // ✅ Show and close Wishlist modal
        function showWishlist() {
            renderWishlist();
            document.getElementById('wishlistModal')?.classList.add('active');
        }

        function closeWishlist() {
            document.getElementById('wishlistModal')?.classList.remove('active');
        }

        // ✅ Render Products
        function renderProducts(filter = 'all', sort = 'featured') {
            const grid = document.getElementById('productGrid');
            if (!grid) return;
            
            let filtered = filter === 'all' ? [...products] : products.filter(p => p.category === filter);
            
            switch (sort) {
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
                            ₱${formatPrice(product.price)}
                            ${product.oldPrice ? `<span class="old-price">₱${formatPrice(product.oldPrice)}</span>` : ''}
                        </div>
                        <div class="product-actions">
                            <button class="add-to-cart" onclick="addProductToCart(${product.id})">Add to Cart</button>
                            <button class="wishlist-btn" onclick="addToWishlist(${product.id})">♡</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // ✅ Add product to cart
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

        // ✅ Category and sorting filters
        function filterByCategory(category, btn) {
            currentFilter = category;
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            if (btn?.classList) btn.classList.add('active');
            renderProducts(category, currentSort);
        }

        function sortProducts(sortType) {
            currentSort = sortType;
            renderProducts(currentFilter, sortType);
        }

        // ✅ Search
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
                                ₱${formatPrice(product.price)}
                                ${product.oldPrice ? `<span class="old-price">₱${formatPrice(product.oldPrice)}</span>` : ''}
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

        // ✅ Initialize
        document.addEventListener('DOMContentLoaded', () => {
            loadWishlist();
            renderProducts();
        });
