---
title: "The TCP Three-Way Handshake"
date: "2024-03-20"
description: "Understanding how TCP establishes connections"
---

# The 3 Way Handshake

The TCP three-way handshake is a fundamental process in establishing a connection between two devices over a TCP/IP network. Let's break down how it works.

## What is it?

The three-way handshake, also known as the TCP handshake, is a three-step method that requires both the client and server to exchange SYN (synchronize) and ACK (acknowledge) packets before actual data communication begins.

## The Process

1. **Step 1: SYN**
   - The client sends a SYN packet to the server
   - This packet says "I want to start a conversation"

2. **Step 2: SYN-ACK**
   - The server responds with a SYN-ACK packet
   - This says "I received your request and I'm ready to talk"

3. **Step 3: ACK**
   - The client sends an ACK packet back
   - This confirms "Great, let's begin our conversation"

## Why is it important?

The three-way handshake ensures:
- Both parties are ready to communicate
- They can agree on sequence numbers
- The connection is established reliably

This process is crucial for establishing secure and reliable connections in modern networking.