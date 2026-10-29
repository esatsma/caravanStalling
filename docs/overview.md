# caravanStalling

A mobile app, built with Expo and React Native, for finding and offering caravan storage. "Stalling" is Dutch for storage or parking. The project is at an early stage.

## Stack
- **Framework:** Expo SDK 53, React Native 0.79 and React 19, with TypeScript. The new architecture is enabled. Targets iOS, Android and web.
- **Routing:** Expo Router, with file-based routes in `app/`.
- **State:** Zustand stores in `stores/`.
- **Backend:** PocketBase (self-hosted). The client is in `service/pocketBase/index.ts` and points at `http://127.0.0.1:8090`. Start the database with `./pocketbase serve` from `/dev/pocketbase`.
- **Forms:** Formik, with validators in `helpers/validateEmail` and `helpers/validatePassword`.

## Structure
- **`app/`**
  - Tabs: `index`, `mijnStalling` ("my storage") and `contact`.
  - Extra screens: `createAccount`, `spaceAvailable` and `noSpaceAvailable`.
  - `+not-found` is the fallback screen.
- **`components/`:** `LoginForm`, `Profile` and `ParallaxScrollView`, plus themed text and view helpers and some Expo template components.
- **`stores/`:** `authStore.ts` handles login, logout and account creation against the PocketBase `users` collection. It persists to AsyncStorage and tracks whether the store has finished loading. `vehicleStore.ts` is currently empty.
- **`service/api/getVehicleData.ts`:** fetches the PocketBase `available_spots` collection.
- **`hooks/`, `constants/`, `scripts/`:** standard Expo template pieces for color scheme and theming.

## How it works
Users create an account and log in from the "Mijn Stalling" tab. Once logged in, `Profile` shows their data, and they can mark whether they have vehicle space available. Other users can then look up available spots.

## Known issues and notes
- **Hardcoded credentials:** `service/pocketBase/index.ts` contains a hardcoded PocketBase superuser email and password. Move them to environment variables and rotate the password before pushing anywhere. Also check that `.env` is not committed with secrets.
- **Template leftovers:** the root `README.md` is the default Expo boilerplate, and components such as `HelloWave` and `Collapsible` come from the starter template.
- **Local-only backend:** the PocketBase URL is `127.0.0.1`, so a physical device cannot reach it without changing the address.
