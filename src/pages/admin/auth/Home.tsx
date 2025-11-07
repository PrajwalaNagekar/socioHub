import React from 'react'
import InstaHome2 from "../../../assets/images/insta-home-2.png"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from '@/components/ui/button-group'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-sm shadow-md border border-gray-200 rounded-xl p-4">
        <CardHeader className="flex flex-col items-center space-y-3">
          <img
            src={InstaHome2}
            alt="Social connection"
            className="w-60 h-100 object-contain"
          />
          <CardTitle className="text-center text-lg font-semibold">
            <span>Share what you're</span><br />
            <span>into with the people </span><br />
            <span className="bg-gradient-to-r from-[#feda75] via-[#d62976] to-[#962fbf] bg-clip-text text-transparent font-semibold">
              who get you.
            </span>
          </CardTitle>
            <CardContent className="flex justify-center flex-col gap-4 pb-6">
              <Link to='/register' className='block w-full'>
                <Button className="px-6 py-2 w-full" >
                  Sign Up
                </Button>
              </Link>
              <Link to="/login" className='block w-full'>
                <Button variant="outline" className="px-6 py-2 w-full">
                  Login
                </Button>
              </Link>
          </CardContent>
        </CardHeader>

      </Card>
    </div>
  )
}

export default Home
