import TitleBig from '@/components/content/TitleBig';
import {
  Button,
} from '@mui/material';

import CallActionContainer from '@/components/content/CallActionContainer';

import { useStaffMembers } from '@/hooks/useSite';

function DocumentsPage() {
  const staffMembersQuery = useStaffMembers();
  const staffMembers = staffMembersQuery?.data;

  const titleBlock = (
      <TitleBig
          title="Врачи"
          size="medium" 
      />
  )

  const MemberCart = ({member}) => {
    return (
      <div className="max-w-[500px] w-auto relative overflow-hidden rounded-md mx-auto">  
        <div className="relative"> 
          <img
            src="http://placehold.it/500x500"
            className="object-cover"
          />
          <div className="absolute bottom-0 w-full">
            <div className="bg-white mx-3 px-3 py-2 rounded-md mb-2">
              <div className="font-medium text-center">
                {member?.name}
              </div>
              <div className="text-gray-500 text-center">
                {member?.scope}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const membersListBlock = (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {staffMembers && staffMembers?.map((member, index) => (
        <MemberCart
          key={index}
          member={member}
        />
      ))
      }
    </div>
  )


  return (
    <div className="mx-4">
      <div className="max-w-screen-lg mx-auto mb-3">
        { titleBlock }
        <div className="py-4">
          { membersListBlock }
        </div>
      </div>
        <CallActionContainer />
    </div>
  )
}

export default DocumentsPage;
