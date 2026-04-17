import styled from "@emotion/styled"
import Link from "next/link"

const NavBar: React.FC = () => {
  const links = [{ id: 1, name: "About", to: "https://lokman-sarkar.vercel.app" }, {id: 2, name: "Resume", to: "https://www.canva.com/design/DAG62ogKVmw/qSlvIBj8MmnFTyTbnv67hw/edit"}]
  return (
    <StyledWrapper className="">
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.to} target="_blank" rel="noopener noreferrer">{link.name} <span className=""></span></Link>
          </li>
        ))}
      </ul>
    </StyledWrapper>
  )
}

export default NavBar

const StyledWrapper = styled.div`
  flex-shrink: 0;
  ul {
    display: flex;
    flex-direction: row;
    li {
      display: block;
      margin-left: 1rem;
      color: ${({ theme }) => theme.colors.gray11};
    }
  }
`
