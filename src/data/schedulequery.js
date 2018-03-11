export const ScheduleQuery = `
{
  events(slug: "reacteurope-2018") {
    id
    description
    name
    collaborators {
      id
      firstName
      lastName
    }
    speakers {
      id
      name
      twitter
      github
      avatarUrl
      bio
      talks {
        id
        title
        description
        length
        startDate
      }
    }
    schedule {
      id
      title
      description
      length
      startDate
      tags
      speakers {
        id
        name
        twitter
        github
        avatarUrl
        bio
      }
    }
    sponsors {
      diamond {
        id
        name
        description
        url
        logoUrl
      }
      platinum {
        id
        name
        description
        url
        logoUrl
      }
      gold {
        id
        name
        description
        url
        logoUrl
      }
      partner {
        id
        name
        description
        url
        logoUrl
      }
    }
  }
}
`;
