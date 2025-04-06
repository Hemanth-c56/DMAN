# 🪼 DMAN Token

DMAN is a custom cryptocurrency token built on the Internet Computer Protocol (ICP) blockchain. This project leverages **React** for the frontend and **Motoko** for the backend smart contracts, offering a modern, decentralized, and scalable token experience.

---

## 🚀 Project Overview

- **Token Name:** DMAN  
- **Blockchain:** Internet Computer Protocol (ICP)  
- **Frontend:** React.js  
- **Backend (Smart Contracts):** Motoko  

---

## 📦 Features

- Faucet mechanism: Claim DMAN tokens once per identity
- Transfer tokens between users
- Internet Identity login support
- Fully on-chain logic with zero centralized servers

---

## 🛠️ Setup Instructions

> 🧑‍💻 These instructions are for developers or contributors who want to run or deploy the project.

### ✅ Prerequisites

Make sure you have the following installed:

- **Node.js** and **npm**
- **DFX SDK** (Internet Computer SDK)
- **WSL (Windows Subsystem for Linux)** if you're on Windows

### ⚙️ Getting Started

To run this project locally after cloning:

 1. **Open the WSL terminal**

 2. **Install the node modules**

 3. **Get your command line principal id** (used as the owner principal)

    ```bash
    dfx identity get-principal
    ```

 3. Run the following commands:

    ```bash
    dfx start
    dfx deploy
    npm start
    ```


> 📝 **Important:** Without deploying to the live chain, Internet Identity won't issue real principal IDs, and users won’t be able to claim tokens properly or use identity-based features.

---

## 🎉 Wrap-Up

This was a small but super fun project to explore how tokens work on the ICP blockchain using Motoko. Learned a bunch along the way — hope it helps someone else out too!

> Feel free to check it out, play around, or even build on top of it 😄