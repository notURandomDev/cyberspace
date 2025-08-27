import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import { SkillIconsGithubDark } from "../SvgIcons/SkillIconsGithubDark";
import { SkillIconsNotionDark } from "../SvgIcons/SkillIconsNotionDark";
import { SquareArrowOutUpRight } from "lucide-react";
import { ProjectScale, ProjectWebsiteInfo } from "@/types/project";
import { Chip } from "@heroui/chip";
import { WebsiteInfo } from "@/types/util";

interface ProjectCardProps {
  name?: string;
  title?: string;
  subtitle?: string;
  description: string;
  description2?: string;
  imgSrc?: string;
  isDisabled?: boolean;
  icon?: any;
  notionUrl?: string;
  githubInfo?: WebsiteInfo;
  projectWebsiteInfo?: ProjectWebsiteInfo;
  projectUrl?: string;
  devSpan: string;
  scale: ProjectScale;
}

export default function ProjectCard({
  name,
  title = "Frontend Radio",
  subtitle = "Daily Mix",
  description,
  description2,
  imgSrc = "https://heroui.com/images/hero-card-complete.jpeg",
  notionUrl,
  githubInfo,
  projectWebsiteInfo,
  isDisabled = false,
  icon,
  devSpan,
  scale,
}: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const Front = (
    <Card isDisabled={isDisabled} className="py-2">
      <CardHeader className="pt-2 px-4 flex-row items-center justify-between">
        <div>
          <h4 className="font-bold text-large">{title}</h4>
          <p className="text-tiny uppercase font-bold">{subtitle}</p>
        </div>
        {icon}
      </CardHeader>
      <CardBody className="overflow-visible py-0 justify-center items-center">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={imgSrc}
          width={270}
          height={160}
        />
      </CardBody>
      <CardFooter className="pt-2 pb-1">
        <small className="text-default-500">{description}</small>
      </CardFooter>
    </Card>
  );

  const Back = (
    <Card isDisabled={isDisabled} className="py-2">
      <CardHeader className="justify-between pt-2">
        <Chip
          radius="sm"
          variant="flat"
          color={scale === "solo" ? "primary" : "secondary"}
        >
          {scale === "solo" ? "个人项目" : "团队项目"}
        </Chip>
        <div className="justify-end flex-col w-full">
          <h4 className="text-end font-bold text-large uppercase">{devSpan}</h4>
          <p className="text-end text-tiny uppercase font-bold">
            {description2}
          </p>
        </div>
      </CardHeader>
      <CardBody className="gap-2 py-0">
        <LinkItem
          href={notionUrl}
          title="项目介绍"
          icon={<SkillIconsNotionDark />}
        />
        <LinkItem
          title={githubInfo?.name ?? "项目未开源"}
          href={githubInfo?.url}
          icon={<SkillIconsGithubDark />}
        />
        <LinkItem
          title={projectWebsiteInfo?.name ?? "项目未部署"}
          href={projectWebsiteInfo?.url}
          icon={
            <div className="w-6 h-6 flex justify-center items-center">
              <SquareArrowOutUpRight size={18} />
            </div>
          }
        />
      </CardBody>
      <CardFooter className="pt-2 pb-1 justify-end">
        <small className="uppercase text-default-500">{name}</small>
      </CardFooter>
    </Card>
  );

  const toggleFlipped = () => {
    if (!isDisabled) setIsFlipped((prev) => !prev);
  };

  return (
    <div onMouseEnter={toggleFlipped} onMouseLeave={toggleFlipped}>
      <ReactCardFlip isFlipped={isFlipped}>
        {Front}
        {Back}
      </ReactCardFlip>
    </div>
  );
}

interface LinkItemProps {
  title: string;
  href?: string;
  icon: any;
  isExternal?: boolean;
}

const LinkItem = ({ title, href, icon, isExternal = true }: LinkItemProps) => {
  const isDisabled = href === undefined;
  return (
    <Card
      isDisabled={isDisabled}
      className={isDisabled ? "pointer-events-none" : "cursor-pointer"}
      as={Link}
      href={href}
      isExternal={isExternal}
    >
      <CardBody className="items-center flex-row gap-2">
        {icon}
        <p>{title}</p>
      </CardBody>
    </Card>
  );
};
