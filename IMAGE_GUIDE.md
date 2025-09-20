# 📸 Mechanic Website Image Guide

## Required Images

Download high-quality, royalty-free images for the following:

### 1. Hero Section
- **File**: `public/images/mechanic-working.jpg`
- **Suggested search**: "mechanic working on car engine", "automotive technician"
- **Dimensions**: 800x600px (4:3 aspect ratio)
- **Description**: Professional mechanic working under the hood of a car

### 2. About Section
- **File**: `public/images/workshop-interior.jpg`
- **Suggested search**: "auto repair shop interior", "car garage workshop"
- **Dimensions**: 1200x600px (2:1 aspect ratio)
- **Description**: Modern automotive workshop with lifts and equipment

### 3. Services Section
Download these 6 service-specific images:

#### Oil Change Service
- **File**: `public/images/oil-change.jpg`
- **Search**: "car oil change", "engine oil maintenance"
- **Dimensions**: 400x300px (4:3 aspect ratio)

#### Engine Repair
- **File**: `public/images/engine-repair.jpg`
- **Search**: "car engine repair", "mechanic engine diagnostics"
- **Dimensions**: 400x300px (4:3 aspect ratio)

#### Brake Service
- **File**: `public/images/brake-service.jpg`
- **Search**: "brake repair", "car brake pads"
- **Dimensions**: 400x300px (4:3 aspect ratio)

#### Transmission Service
- **File**: `public/images/transmission.jpg`
- **Search**: "car transmission repair", "gearbox maintenance"
- **Dimensions**: 400x300px (4:3 aspect ratio)

#### AC Service
- **File**: `public/images/ac-service.jpg`
- **Search**: "car air conditioning repair", "automotive AC service"
- **Dimensions**: 400x300px (4:3 aspect ratio)

#### General Repair
- **File**: `public/images/general-repair.jpg`
- **Search**: "car maintenance", "automotive repair shop"
- **Dimensions**: 400x300px (4:3 aspect ratio)

## 🌐 Recommended Free Image Sources

### 1. Unsplash (unsplash.com)
- Highest quality professional images
- No attribution required for commercial use
- Search terms: "mechanic", "automotive", "car repair"

### 2. Pexels (pexels.com)
- Great selection of automotive images
- Free for commercial use
- Easy download process

### 3. Pixabay (pixabay.com)
- Good variety of mechanic-related images
- Free with account
- Various sizes available

## 📋 Download Instructions

1. Visit one of the recommended sites
2. Search for the suggested terms
3. Look for images with:
   - Professional appearance
   - Good lighting
   - Clear, high resolution
   - No visible watermarks
   - Appropriate for business use

4. Download in the highest available resolution
5. Rename the files exactly as specified above
6. Place them in the `public/images/` folder

## 🔧 After Adding Images

Once you've added the images, uncomment the image tags in these components:
- `src/components/Hero.tsx` (line ~78)
- `src/components/Services.tsx` (lines ~125-129)
- `src/components/About.tsx` (lines ~107-111)

## 📐 Image Optimization Tips

- Keep file sizes under 500KB each
- Use JPEG format for photographs
- Consider WebP format for better compression
- Ensure images are properly compressed before upload

## ✅ Final Steps

After adding all images:
1. Test the website locally: `npm run dev`
2. Verify all images load correctly
3. Check responsive behavior on different screen sizes
4. Optimize loading performance if needed

---

**Note**: All placeholder styling will be automatically replaced once you add the actual images and uncomment the image tags!
