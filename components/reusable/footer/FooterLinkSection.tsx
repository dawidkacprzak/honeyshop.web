interface IProps {
  header: string;
  links: { text: string; url: string }[];
}

const FooterLinkSection = ({ header, links }: IProps) => {
  return (
    <div className="text-maingray flex flex-col w-[150px] xl:w-[200px]">
      <p className="mb-[30px] text-[16px]">{header}</p>
      <div className="flex flex-col">
          {putLinks(links)}
      </div>
    </div>
  );
};

function putLinks(links: { text: string; url: string }[]) : JSX.Element[] {
    let linkSection : JSX.Element[] = [];
    for(let i : number = 0;i<links.length;i++){
        let element = <a key={i} className="text-[14px] mb-[10px]" href={links[0].url}>{links[0].text}</a>
        linkSection.push(element);
    }
    return linkSection;
}

export default FooterLinkSection;
