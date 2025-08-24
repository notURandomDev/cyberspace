import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import React from "react";

const HomePageHeroSection = () => {
  return (
    <section className="flex grow flex-col justify-center h-full gap-8 md:gap-16 2xl:gap-24">
      <div className="flex justify-center">
        <span className={title()}>🪙 Flip the Coin of Me</span>
      </div>
      <div className="gap-4 flex flex-col md:flex-row">
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">
              Web ｜ 微信小程序 ｜ RN跨平台 ｜ iOS原生
            </p>
            <small className="text-default-500">
              ☕️ Can't Live Without My Daily Dose of Caffeine
            </small>
            <h4 className="font-bold text-large">开发</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              isBlurred
              alt="Card background"
              className="object-cover rounded-xl"
              src="/img/keyboard.png"
            />
          </CardBody>
        </Card>
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">
              鼓手 ｜ 乐队 ｜ 音乐创作
            </p>
            <small className="text-default-500">🥁 Spicy Chops!!!</small>
            <h4 className="font-bold text-large">音乐</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              isBlurred
              className="object-cover rounded-xl"
              src="/img/drum-stage.png"
            />
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default HomePageHeroSection;
