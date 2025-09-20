#!/usr/bin/env node

/**
 * Image Enabler Script
 * Run this script after adding all images to automatically uncomment image tags
 */

const fs = require('fs');
const path = require('path');

const componentsToUpdate = [
  {
    file: 'src/components/Hero.tsx',
    search: `                {/* TODO: Replace with actual image */}
                {/* <img 
                  src="/images/mechanic-working.jpg" 
                  alt="Mechanic working on car engine"
                  className="w-full h-full object-cover"
                /> */}`,
    replace: `                <img 
                  src="/images/mechanic-working.jpg" 
                  alt="Mechanic working on car engine"
                  className="w-full h-full object-cover"
                />`
  },
  {
    file: 'src/components/Services.tsx',
    search: `                {/* TODO: Uncomment when you add actual images */}
                {/* <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                /> */}`,
    replace: `                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />`
  },
  {
    file: 'src/components/About.tsx',
    search: `            {/* TODO: Replace with actual workshop image */}
            {/* <img 
              src="/images/workshop-interior.jpg" 
              alt="ProAuto Serwis workshop interior"
              className="w-full h-full object-cover"
            /> */}`,
    replace: `            <img 
              src="/images/workshop-interior.jpg" 
              alt="ProAuto Serwis workshop interior"
              className="w-full h-full object-cover"
            />`
  }
];

console.log('🖼️  Mechanic Website Image Enabler');
console.log('==================================');

// Check if images exist
const requiredImages = [
  'public/images/mechanic-working.jpg',
  'public/images/workshop-interior.jpg',
  'public/images/oil-change.jpg',
  'public/images/engine-repair.jpg',
  'public/images/brake-service.jpg',
  'public/images/transmission.jpg',
  'public/images/ac-service.jpg',
  'public/images/general-repair.jpg'
];

const missingImages = requiredImages.filter(img => !fs.existsSync(img));

if (missingImages.length > 0) {
  console.log('❌ Missing images:');
  missingImages.forEach(img => console.log(`   - ${img}`));
  console.log('\nPlease add all images before running this script.');
  console.log('See IMAGE_GUIDE.md for download instructions.');
  process.exit(1);
}

console.log('✅ All required images found!');
console.log('\n🔧 Updating components...');

// Update components
componentsToUpdate.forEach(({ file, search, replace }) => {
  try {
    const filePath = path.join(process.cwd(), file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes(search)) {
      content = content.replace(search, replace);
      fs.writeFileSync(filePath, content);
      console.log(`✅ Updated ${file}`);
    } else {
      console.log(`⚠️  ${file} already updated or pattern not found`);
    }
  } catch (error) {
    console.log(`❌ Error updating ${file}:`, error.message);
  }
});

console.log('\n🎉 Image integration complete!');
console.log('Run "npm run dev" to see your images in action.');
