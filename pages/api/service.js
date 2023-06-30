export default function handler(req, res) {
  const services = [
    {
      id: 1,
      slug: "BIM-modeling",
      sections1: [
        {
          title: "BIM Modeling",
          breadcrumb: "Home > Services > BIM Modeling",
          banner: "/assets/services/Bimbanner.png",
        },
      ],
      sections2: [
        {
          title: "BIM Modeling",
          body: "Our team of skilled engineers and architects excels in the field of building information modeling (BIM), utilizing the industry-leading Autodesk REVIT software. We offer top-notch BIM solutions that streamline the construction process, enhance collaboration, and improve overall project efficiency. Through accurate 3D modeling and intelligent data integration, we help you visualize your project before it comes to life, reducing errors and optimizing resource allocation. Some of the facilities provided are mentioned below:",
        },
      ],
      sections3: [
        {
          l1: "furniture, lighting, accessory selections for furnishings",
          l2: "purchasing and procurement",
          l3: "project management and regular site visits to monitor design execution",
          l4: "installation and final touches",
        },
      ],
      sections4: [
        {
          image1: "/assets/services/Bim1.png",
          image2: "/assets/services/Bim2.png",
          image3: "/assets/services/Bim3.png",
          image4: "/assets/services/Bim4.png",
        },
      ],
      sections5: [
        {
          image1: "/assets/services/Bimbanner2.png",
          text: "AutoCAD Drafting AutoCAD Drafting AutoCAD Drafting AutoCAD Drafting AutoCAD Drafting AutoCAD Drafting",
        },
      ],
    },
    {
      id: 2,
      slug: "AutoCAD",
      sections1: [
        {
          title: "AutoCAD Drafting",
          breadcrumb: "Home > Services > AutoCAD Drafting",
          banner: "/assets/services/Bimbanner.png",
        },
      ],
      sections2: [
        {
          title: "AutoCAD Drafting",
          body: "Our team of skilled engineers and architects excels in the field of building information modeling (BIM), utilizing the industry-leading Autodesk REVIT software. We offer top-notch BIM solutions that streamline the construction process, enhance collaboration, and improve overall project efficiency. Through accurate 3D modeling and intelligent data integration, we help you visualize your project before it comes to life, reducing errors and optimizing resource allocation. Some of the facilities provided are mentioned below:",
        },
      ],
      sections3: [
        {
          l1: "furniture, lighting, accessory selections for furnishings",
          l2: "purchasing and procurement",
          l3: "project management and regular site visits to monitor design execution",
          l4: "installation and final touches",
        },
      ],
      sections4: [
        {
          image1: "/assets/services/Bim1.png",
          image2: "/assets/services/Bim2.png",
          image3: "/assets/services/Bim3.png",
          image4: "/assets/services/Bim4.png",
        },
      ],
      sections5: [
        {
          image1: "/assets/services/Bimbanner2.png",
          text: "Interior Designer Interior Designer Interior Designer Interior Designer Interior Designer Interior Designer",
        },
      ],
    },
  ];

  res.status(200).json(services);
}
