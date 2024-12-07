# Featured Moments App

**Featured Moments App** is a beautifully designed web application that showcases moments through a carousel of image cards. The app allows administrators to manage the carousel content via a dashboard, ensuring the latest moments are always on display.

## Features

### Carousel Page
- Displays featured moments in a horizontal carousel.
- Highlights up to 3 fully visible image cards, with a partial view of the fourth card.
- Smooth scrolling for navigating through the cards using arrow buttons.
- Responsive design ensures the carousel adapts to different screen sizes.

### Admin Dashboard
- Accessible at `/dashboard`.
- Enables adding, viewing, and deleting image cards for the carousel.
- Clean, user-friendly interface for managing content.

## Tech Stack
- Frontend: React with Next.js.
- Styling: Styled-Components.
- Database: Firestore (Firebase).
- Hosting: Vercel.

## How to Use

1. Visit the hosted app: https://featured-moments-app.vercel.app/.
2. View the featured moments carousel on the homepage.
3. Use the dashboard to manage carousel content:
   - Add a new card by providing a title, description, and image URL.
   - View the list of existing cards with options to delete them.

## Development

### Local Setup
1. Clone the repository:
   git clone https://github.com/your-username/featured-moments-app.git
   cd featured-moments-app

2. Install dependencies:
   npm install

3. Start the development server:
   npm run dev

4. Open http://localhost:3000 in your browser to view the app.

### Environment Variables
Create a `.env.local` file in the root directory and add the following Firebase credentials:

NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key  
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain  
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id  
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket  
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id  
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id  

### Build for Production
To create an optimized build, run:
   npm run build

To serve the production build locally:
   npm start

## Deployment

The app is deployed on Vercel and accessible at:  
https://featured-moments-app.vercel.app/
