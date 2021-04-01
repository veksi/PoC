# PoC

PoC has been implemented on M1 mac, so therefore there might be some issues when starting the project.

1. `yarn`
2. `cd ios/ && pod install`
3. `npm install -g json-server`  (or install it inside the repo only)
4. start the json server with: `json-server --d 350 --watch db.json` 
    -> db.json represents an API for server render UI
    -> --d 350 means there is 350ms delay (trying to get close to production env.)
5. start the iOS app (android is not setup completely)
