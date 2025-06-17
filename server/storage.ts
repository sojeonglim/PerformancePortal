import { users, contactMessages, castMembers, type User, type InsertUser, type ContactMessage, type InsertContactMessage, type CastMember, type InsertCastMember } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getAllContactMessages(): Promise<ContactMessage[]>;
  getAllCastMembers(): Promise<CastMember[]>;
  createCastMember(castMember: InsertCastMember): Promise<CastMember>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactMessages: Map<number, ContactMessage>;
  private castMembers: Map<number, CastMember>;
  private currentUserId: number;
  private currentMessageId: number;
  private currentCastId: number;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
    this.castMembers = new Map();
    this.currentUserId = 1;
    this.currentMessageId = 1;
    this.currentCastId = 1;

    // Initialize cast members
    this.initializeCastMembers();
  }

  private initializeCastMembers() {
    const initialCast: Omit<CastMember, 'id'>[] = [
      {
        characterName: "Rachel Green",
        actorName: "Amelia Clarke",
        quote: "It's like all my life everyone always told me, 'You're a shoe! You're a shoe! You're a shoe!' Well, what if I don't want to be a shoe?",
        imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
      },
      {
        characterName: "Monica Geller",
        actorName: "Olivia Bennett",
        quote: "I know! This is probably for the best. Y'know? Independence. Taking control of your life.",
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
      },
      {
        characterName: "Phoebe Buffay",
        actorName: "Sarah Williams",
        quote: "Oh, I wish I could, but I don't want to.",
        imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
      },
      {
        characterName: "Ross Geller",
        actorName: "Michael Chen",
        quote: "Unagi. It's a state of total awareness. Only by achieving true unagi can you be prepared for any danger that may befall you.",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
      },
      {
        characterName: "Chandler Bing",
        actorName: "James Rodriguez",
        quote: "I'm not great at the advice. Can I interest you in a sarcastic comment?",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
      },
      {
        characterName: "Joey Tribbiani",
        actorName: "David Park",
        quote: "How you doin'?",
        imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
      }
    ];

    initialCast.forEach(member => {
      const castMember: CastMember = {
        id: this.currentCastId++,
        ...member
      };
      this.castMembers.set(castMember.id, castMember);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentMessageId++;
    const message: ContactMessage = { 
      ...insertMessage, 
      id,
      createdAt: new Date()
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getAllContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }

  async getAllCastMembers(): Promise<CastMember[]> {
    return Array.from(this.castMembers.values());
  }

  async createCastMember(insertCastMember: InsertCastMember): Promise<CastMember> {
    const id = this.currentCastId++;
    const castMember: CastMember = { ...insertCastMember, id };
    this.castMembers.set(id, castMember);
    return castMember;
  }
}

export const storage = new MemStorage();
