export interface Mission {
  flight_number: number;
  mission_name: string;
  launch_year: string;
  details: string;
  rocket: {
    rocket_name: string;
    rocket_type: string;
    first_stage: {
      cores: {
        launch_success: boolean;
        land_success: boolean;
      }[];
    };
  };
  links: {
    mission_patch_small: string;
    article_link: string;
    wikipedia: string;
    video_link: string;
  };
}
