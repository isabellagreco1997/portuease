import React, { createContext, useContext, useState } from 'react';

const BlogContext = createContext();

export const useBlogs = () => {
  return useContext(BlogContext);
};

const BlogProvider = ({ children }) => {
  const [blogs] = useState([
    {
        id: 1,
        title: "Festa Junina: A Brazilian Celebration You Need to Know About!",
        date: "05/09/2024",
        readTime: "8 minutes",
        author: "PortuEase Team",
        description: "Discover the vibrant traditions of Brazil's Festa Junina and how cultural immersion can enhance your language learning journey.",
        image: "https://educasc.com.br/wp-content/uploads/2023/06/iStock-1481234812-scaled.webp",
        category: "Learning Tips",
        blogPost: {
          title: "Festa Junina: A Brazilian Celebration You Need to Know About!",
          content: `
            <p>If you're diving into the Portuguese language and Brazilian culture, you've probably come across the term 'Festa Junina.' This vibrant and joyous celebration, deeply rooted in Brazilian tradition, offers a wonderful way to immerse yourself in the language and culture. Here’s everything you need to know about Festa Junina.</p>
            
            <h4>What is Festa Junina?</h4>
            
            <p>Festa Junina, also known as the June Festival, is a traditional Brazilian festival that takes place throughout the month of June. It honors saints like Saint Anthony, Saint John, and Saint Peter, and celebrates rural life and its customs. It's one of the most important and widely celebrated events in Brazil, second only to Carnival.</p>
            
            <h4>Origins and Cultural Significance</h4>
            
            <p>The festival was introduced to Brazil by Portuguese colonists, who brought over their mid-summer celebrations. Over time, it has evolved to incorporate indigenous and African influences, resulting in a unique blend of traditions that are distinctly Brazilian. Festa Junina is a time to celebrate the harvest and rural culture, featuring folk dances, music, and typical foods.</p>
            
            <h4>Key Elements of Festa Junina</h4>
            
            <ol>
              <li><strong>Quadrilha Dance:</strong> One of the highlights of Festa Junina is the quadrilha, a traditional folk dance that mimics a rural wedding. Participants dress in colorful costumes, with men wearing checkered shirts and straw hats, and women donning pigtails and gingham dresses.</li>
              <li><strong>Food:</strong> The festival is a culinary delight with an array of traditional foods. You can expect to enjoy dishes like canjica (a sweet corn pudding), pamonha (a type of corn cake), and quentão (a hot drink made from cachaça, ginger, and spices).</li>
              <li><strong>Bonfires:</strong> Bonfires are a central feature of the celebrations, symbolizing warmth and togetherness. People gather around the fire to dance, sing, and enjoy the festive atmosphere.</li>
              <li><strong>Games and Activities:</strong> Various games such as sack races, tug-of-war, and the traditional 'pau-de-sebo' (a greased pole climbing competition) are enjoyed by people of all ages.</li>
              <li><strong>Costumes:</strong> Dressing up is a big part of the fun. The typical attire is inspired by rural life, with men often wearing fake mustaches and women sporting painted freckles.</li>
            </ol>
            
            <h4>Why Gringos Should Experience Festa Junina</h4>
            
            <p>Experiencing Festa Junina firsthand is an excellent way to practice your Portuguese and understand Brazilian culture. The lively atmosphere, friendly locals, and immersive activities provide countless opportunities to learn and practice new vocabulary. Plus, it's a lot of fun!</p>
            
            <h4>Learning Portuguese with PortuEase</h4>
            
            <p>At PortuEase, we believe in learning through cultural immersion. That's why our platform includes interactive modules about Brazilian festivals like Festa Junina. With our latest upgrades, learning Portuguese has never been easier. Our features include:</p>
            
            <ul>
              <li><strong>Error Explanation:</strong> Detailed explanations of common mistakes.</li>
              <li><strong>AI-Generated Hints:</strong> Helpful hints to guide you through complex sentences.</li>
              <li><strong>Built-In Tooltips:</strong> Instant translations and definitions to enhance your understanding.</li>
            </ul>
            
            <p>By incorporating cultural contexts into our lessons, we make learning more intuitive and enjoyable. So, join us in celebrating Festa Junina and take your Portuguese to the next level!</p>
                        
        `
        }
      },      
    {
        "id": 2,
        "title": "Exploring Brazilian Folk Legends: Iara, Saci Pererê, and More",
        "date": "05/09/2024",
        "readTime": "8 minutes",
        "author": "PortuEase Team",
        "description": "Dive into the enchanting world of Brazilian folk legends and discover how these stories can enrich your language learning experience.",
        "image": "https://www.j1diario.com.br/wp-content/uploads/2023/10/saci-perere.jpg",
        "category": "Learning Tips",
        "blogPost": {
          "title": "Exploring Brazilian Folk Legends: Iara, Saci Pererê, and More",
          "content": `
            <p>Brazil is a land of rich cultural heritage and fascinating stories, many of which are embodied in its folk legends. These tales, passed down through generations, offer a window into the values, beliefs, and imagination of the Brazilian people. In this post, we explore some of the most famous Brazilian folk legends, including Iara, Saci Pererê, and more.</p>
            
            <h4>Iara: The Enchanting Mermaid</h4>
            
            <p>Iara, also known as the "Lady of the Waters," is a beautiful mermaid who inhabits the rivers of the Amazon. According to legend, she uses her captivating beauty and melodious voice to lure men into the water, where they are never seen again. The story of Iara highlights themes of beauty, danger, and the unknown depths of nature.</p>
            
            <h4>Saci Pererê: The Mischievous Trickster</h4>
            
            <p>Saci Pererê is one of the most iconic characters in Brazilian folklore. This one-legged, red-capped figure is known for his playful and mischievous nature. He appears in a whirl of wind, causing all sorts of trouble, from hiding children's toys to souring milk. Despite his tricks, Saci is often seen as a guardian of the forest, protecting it from harm.</p>
            
            <h4>Curupira: The Forest Protector</h4>
            
            <p>Curupira is a powerful protector of the Brazilian forests. This character is depicted as a boy with flaming hair and feet that face backwards, making it difficult to track him. Curupira punishes those who harm the forest, leading hunters and woodcutters astray with his backward footprints and eerie sounds. His story emphasizes the importance of respecting nature.</p>
            
            <h4>Boitatá: The Fiery Serpent</h4>
            
            <p>Boitatá is a legendary serpent of fire that roams the countryside at night, guarding the forests and fields. According to the legend, Boitatá consumes the eyes of animals and people it encounters, using the light from their eyes to fuel its fiery glow. This legend serves as a cautionary tale about the dangers of wandering alone at night.</p>
            
            <h4>Why Learning About Brazilian Folk Legends is Beneficial</h4>
            
            <p>Understanding Brazilian folk legends offers a unique insight into the culture and values of the country. These stories can enrich your language learning experience by providing context and depth to your studies. By learning about characters like Iara, Saci Pererê, Curupira, and Boitatá, you can gain a deeper appreciation for the nuances of the Portuguese language and the cultural heritage it conveys.</p>
            
            <h4>Learning Portuguese with PortuEase</h4>
            
            <p>At PortuEase, we believe in making language learning engaging and immersive. That's why our platform includes interactive lessons about Brazilian folklore. With our latest upgrades, learning Portuguese has never been more fun or intuitive. Our features include:</p>
            
            <ul>
              <li><strong>Error Explanation:</strong> Detailed explanations of common mistakes.</li>
              <li><strong>AI-Generated Hints:</strong> Helpful hints to guide you through complex sentences.</li>
              <li><strong>Built-In Tooltips:</strong> Instant translations and definitions to enhance your understanding.</li>
            </ul>
            
            <p>By incorporating cultural stories into our lessons, we make learning more enjoyable and effective. So, join us in exploring Brazilian folk legends and take your Portuguese to the next level!</p>
          `
        }
    },
    {
        "id": 3,
  "title": "How to Prepare for Your Trip to Brazil",
  "date": "05/09/2024",
  "readTime": "8 minutes",
  "author": "PortuEase Team",
  "description": "Get ready for your Brazilian adventure with these essential tips on travel preparation, cultural insights, and language learning.",
  "image": "https://www.divergenttravelers.com/wp-content/uploads/edit-5935-1200x900.jpg",
  "category": "Travel Tips",
  "blogPost": {
    "title": "How to Prepare for Your Trip to Brazil",
    "content": `
      <p>Planning a trip to Brazil? Whether you're drawn to its vibrant cities, stunning beaches, or lush rainforests, Brazil offers a diverse and unforgettable travel experience. Here are some essential tips to help you prepare for your Brazilian adventure.</p>
      
      <h4>1. Check Visa Requirements</h4>
      
      <p>Before you book your flight, make sure to check the visa requirements for your country. Some nationalities can enter Brazil without a visa for short stays, while others may need to apply for a tourist visa. Visit the official Brazilian consulate website for the most up-to-date information.</p>
      
      <h4>2. Learn Basic Portuguese</h4>
      
      <p>While many people in Brazil speak English, especially in tourist areas, knowing some basic Portuguese phrases can greatly enhance your experience. Greetings, directions, and common expressions will help you navigate and connect with locals more effectively. Consider using language learning apps or taking a basic course to get started. Some useful phrases include "Olá" (Hello), "Por favor" (Please), "Obrigado/Obrigada" (Thank you), and "Onde fica...?" (Where is...?).</p>
      
      <h4>3. Get Vaccinated</h4>
      
      <p>Check with your healthcare provider about recommended vaccinations for Brazil. Common vaccines include those for hepatitis A and B, typhoid, and yellow fever. Ensure you are up-to-date on routine vaccinations as well. Additionally, consider packing a basic first aid kit with items like band-aids, antiseptic wipes, and any prescription medications you may need.</p>
      
      <h4>4. Understand the Climate</h4>
      
      <p>Brazil's climate varies significantly from region to region. The north is typically hot and humid, while the south experiences more temperate weather. Pack accordingly based on the season and regions you plan to visit. Don't forget essentials like sunscreen, insect repellent, and a good pair of walking shoes. It's also wise to bring light, breathable clothing for daytime and a light jacket for cooler evenings.</p>
      
      <h4>5. Plan Your Itinerary</h4>
      
      <p>Brazil is a vast country with diverse attractions. Whether you're interested in exploring the Amazon rainforest, relaxing on Rio's beaches, or experiencing the cultural richness of Salvador, planning your itinerary in advance will help you make the most of your trip. Research destinations, transportation options, and accommodations to ensure a smooth journey. Consider including a mix of urban and rural experiences to get a full taste of Brazil's diversity.</p>
      
      <h4>6. Stay Safe</h4>
      
      <p>As with any travel destination, it's important to stay aware of your surroundings and take precautions to stay safe. Avoid carrying large amounts of cash, be cautious in crowded areas, and use reputable transportation services. It's also a good idea to have a copy of your passport and important documents stored separately from the originals. Additionally, familiarize yourself with local emergency numbers and the location of your country's embassy or consulate.</p>
      
      <h4>7. Embrace the Culture</h4>
      
      <p>Brazil is known for its rich and diverse culture. Take time to learn about local customs, traditions, and etiquette. Whether it's enjoying a traditional feijoada meal, dancing samba, or participating in a local festival, immersing yourself in the culture will enrich your travel experience. Respect local customs, such as greeting people with a friendly "bom dia" (good morning) or "boa tarde" (good afternoon) and understanding the importance of personal space and social interactions.</p>
      
      <h4>8. Currency and Payments</h4>
      
      <p>The Brazilian currency is the Real (BRL). It's a good idea to exchange some money before you arrive, but you can also withdraw cash from ATMs. Credit cards are widely accepted in major cities, but it's always useful to have some cash on hand for smaller establishments and in more remote areas. Notify your bank of your travel plans to avoid any issues with card transactions.</p>
      
      <h4>9. Connectivity</h4>
      
      <p>Staying connected while traveling is important. Consider purchasing a local SIM card for your phone upon arrival or checking with your mobile provider about international plans. Most hotels and cafes offer free Wi-Fi, but having mobile data can be handy for navigation and staying in touch.</p>
      
      <h4>10. Pack Smart</h4>
      
      <p>When packing for Brazil, consider the activities you plan to do. Beachwear, hiking gear, and comfortable clothing are must-haves. Don't forget essentials like travel adapters, a reusable water bottle, and a backpack for day trips. Packing light will make it easier to move around, especially if you plan to visit multiple destinations.</p>
      
      <h4>Learning Portuguese with PortuEase</h4>
      
      <p>At PortuEase, we believe that learning the language and culture goes hand in hand. Our platform offers interactive lessons that incorporate travel tips and cultural insights, making your preparation for Brazil both fun and effective. With our latest upgrades, you can:</p>
      
      <ul>
        <li><strong>Error Explanation:</strong> Get detailed explanations of common mistakes.</li>
        <li><strong>AI-Generated Hints:</strong> Receive helpful hints to guide you through complex sentences.</li>
        <li><strong>Built-In Tooltips:</strong> Access instant translations and definitions to enhance your understanding.</li>
      </ul>
      
      <p>By combining language learning with practical travel advice, we help you get ready for your Brazilian adventure. Join us at PortuEase and take your Portuguese to the next level!</p>
    `
  }
    }
  ]);

  return (
    <BlogContext.Provider value={{ blogs }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;