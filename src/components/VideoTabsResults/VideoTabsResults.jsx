import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AboutCourse, CourseContent, CourseResources,  } from "..";


const TabsContentResults = () => {
  const activeTabIdx = useSelector((state) => state.videoTabs.activeTabIdx);

  return (
    <div className="mx-auto w-[80%] pt-4 pb-8">
       
      {activeTabIdx === 0 && (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure impedit
          amet facilis? Consequatur sapiente dolorem illum, earum distinctio
          ullam excepturi vero odio nemo temporibus, accusamus libero aspernatur
          obcaecati nostrum? Eveniet neque provident quos, quidem autem laborum
          magnam rem cumque quibusdam amet. Deserunt odio explicabo id nobis
          eligendi nesciunt ratione in dicta rerum! Minus saepe magnam
          aspernatur ipsum exercitationem! Non commodi magnam quis rem dolores
          vitae autem omnis, et quidem natus, hic nesciunt. Sed ducimus in
          eveniet quidem dignissimos, hic cumque ea nam deserunt dolore vero
          doloremque, incidunt asperiores modi aliquid provident quibusdam dolor
          qui est nulla vel tempore! Vitae quas necessitatibus sint quaerat
          atque aut, omnis dolor maiores perspiciatis, unde a doloremque
          voluptas accusamus impedit suscipit repudiandae, deserunt consequuntur
          obcaecati est porro? Libero temporibus quidem dolor est accusantium
          consectetur? Ducimus, eum. Ut magnam, enim sed earum aspernatur
          assumenda laudantium, est eveniet illo exercitationem hic quae esse
          eos repellat natus voluptatibus, vero aut modi. Adipisci tenetur
          delectus quos nam id quis, voluptate cumque sed culpa doloribus odit
          cupiditate obcaecati veniam alias debitis labore ipsam? Sunt, ad,
          numquam quis illum molestiae voluptatem ipsa aliquid pariatur mollitia
          ut cum, inventore earum sapiente. Impedit illo porro hic inventore
          dicta! Iure ex excepturi odit quia!
        </div>
      )}
      {activeTabIdx === 1 && (
        <div>
          Notes: Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Voluptatum adipisci libero tempore incidunt praesentium officiis unde
          quod quia ad, suscipit repudiandae laborum, aliquam voluptatem
          perspiciatis quae illo. Dicta illo quidem expedita. Assumenda vero
          voluptatum impedit neque! Voluptates ipsa consequatur iure dolore
          animi officiis iste non. Officiis suscipit magni iure doloribus autem
          id quaerat culpa voluptatum odio repudiandae natus sunt eum dolorem
          hic, ut cupiditate animi voluptate voluptatem minima! Optio magni
          vitae aliquam est inventore exercitationem. Quia, odio repellat. Et ab
          obcaecati itaque cumque nam libero, sit laudantium dolorem nulla ad?
          Facilis dolore consectetur adipisci. Saepe obcaecati corporis sed
          debitis quos molestiae voluptate eos esse, labore harum eaque
          reiciendis corrupti libero! Odit pariatur iure itaque, nostrum ex,
          sequi tempora cupiditate possimus accusamus aliquam mollitia
          consectetur sit praesentium ea dolor, hic vero numquam. Libero quam
          velit delectus facere veritatis maiores quos iusto beatae nesciunt
          consequuntur tempora corrupti amet nam dignissimos illo unde
          praesentium, impedit voluptas porro qui recusandae ipsum a saepe
          eveniet! Molestiae asperiores, alias libero eius minima ab obcaecati
          placeat vitae. Dolorem id commodi eum repellendus ducimus? Voluptatem
          nemo praesentium exercitationem repudiandae saepe tempore eligendi
          delectus vel officiis laboriosam at, obcaecati cupiditate accusamus
          impedit esse illum quo enim animi quis sint.
        </div>
      )}
      {
        activeTabIdx == 2 &&  <CourseContent/>
      }
    </div>
  );
};

export default TabsContentResults;
