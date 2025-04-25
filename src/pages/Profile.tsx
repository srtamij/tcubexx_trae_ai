import React from "react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Profile() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="h-20 w-20" />
              <div>
                <h1 className="text-2xl font-bold">User Profile</h1>
                <p className="text-muted-foreground">user@example.com</p>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="projects">
                <TabsList>
                  <TabsTrigger value="projects">My Projects</TabsTrigger>
                  <TabsTrigger value="orders">Orders</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="projects" className="mt-6">
                  {/* Projects grid will go here */}
                </TabsContent>
                <TabsContent value="orders" className="mt-6">
                  {/* Orders list will go here */}
                </TabsContent>
                <TabsContent value="settings" className="mt-6">
                  {/* Settings form will go here */}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}