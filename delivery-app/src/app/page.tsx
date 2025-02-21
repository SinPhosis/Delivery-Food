//1. Food Delivery Service => Sign-up:
//2. Validate email and password
//3. Check if email already exist => true => return error
//4. crypt user password
//5. Create user

//2. Food Delivery Service => Login:
//1. Validate email and password
//2. Check if email already exist => false => return account not found
//3. Compare password with user password
//4. Return user

//3. Food Delivery Client => Login & Sign up pages

//4. Food Delivery Admin => Admin Food Menu
//1. CRUD Category
//2. CRUD FOOD

//5. Food Delivery Admin => Admin Settings
//1. Get all users

//6. Food Delivery Client => Client Home Page

//7. Food Delivery Service => Client order CRUD

//8. Food Delivery Client =>Client Card + Location

//9. Food Delivery Client =>Client order

//10. Food Delivery Admin => Admin Order Table

//If checked red like this, it means i've completed it.

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-full h-[1100px]">
      <div className="w-[1440px] h-[1024px] relative overflow-hidden">
        <div className="w-[416px] h-72 absolute top-[246px] left-[100px] flex-col justify-center items-start gap-6 inline-flex">
          <div className="self-stretch h-[60px] flex-col justify-start items-start gap-1 flex">
            <div className="text-zinc-950 text-2xl font-semibold font-['Inter'] leading-loose">
              Create your account
            </div>
            <div className="text-zinc-500 text-base font-normal font-['Inter'] leading-normal">
              Sign up to explore your favorite dishes.
            </div>
          </div>
          <div className="self-stretch h-9 flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch h-9 flex-col justify-start items-start gap-2 flex">
              <Input placeholder="Enter your email address" />
            </div>
          </div>
          <div className="self-stretch justify-start items-start gap-3 inline-flex">
            <Button className="" />
          </div>
        </div>
      </div>
    </div>
  );
}
