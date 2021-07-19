/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

/* eslint-disable lint/no-value-import */
import Code from '../core/Code.js';
import Container from '../core/Container';
import GridBlock from '../core/GridBlock';
import useBaseUrl, {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useThemeContext from '@theme/hooks/useThemeContext';
import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
/* eslint-enable lint/no-value-import */

function LoadQueryLink() {
  return (
    <a href={useBaseUrl('/docs/api-reference/load-query/')}>
      <code>loadQuery</code>
    </a>
  );
}

function UsePreloadedQueryLink() {
  return (
    <a href={useBaseUrl('/docs/api-reference/use-preloaded-query/')}>
      <code>usePreloadedQuery</code>
    </a>
  );
}

function QueriesLink() {
  return (
    <a href={useBaseUrl('/docs/guided-tour/rendering/queries/')}>Queries</a>
  );
}

function UseFragmentLink() {
  return (
    <a href={useBaseUrl('/docs/guided-tour/use-fragment/')}>
      <code>useFragment</code>
    </a>
  );
}

const HomeSplash = () => {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div>
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="logo">
            <img src={useBaseUrl('img/logo_white.png')} />
          </div>
          <div className="wrapper homeWrapper">
            <h2 className="projectTitle">
              {siteConfig.title}
              <small>{siteConfig.tagline}</small>
              <small>{siteConfig.subtagline}</small>
            </h2>
            <div className="try-it">
              <h3>
                <a
                  className="button"
                  href="https://codesandbox.io/s/relay-sandbox-nxl7i?file=/src/TodoApp.tsx"
                  target="_blank">
                  API Бүтээгдэхүүн
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  const {siteConfig} = useDocusaurusContext();
  const {withBaseUrl} = useBaseUrlUtils();
  const {isDarkTheme} = useThemeContext();

  const showcase = siteConfig.customFields.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={withBaseUrl(user.image)} title={user.caption} />
          <div>
            <h6>{user.caption}</h6>
            <p>{user.description}</p>
          </div>
        </a>
      );
    });

  return (
    <div>
      <HomeSplash />
      <div className="homePage mainContainer">
        <Container className="textSection" background="light">
          <GridBlock
            layout="threeColumn"
            contents={[
              {
                title: 'Танилцуулга',
                content: (
                  <span>
                    <p>
                      Relay is data-fetching turned <b>declarative</b>.
                      Components declare their data dependencies, without
                      worrying about how to fetch them. Relay guarantees that
                      the data each component needs is fetched and available.
                      This keeps components decoupled and promotes reuse.
                    </p>

                    <p>
                      With Relay, components and their data dependencies can be
                      quickly modified without modifying other parts of the
                      system. That means you won't accidentally break other
                      components as you refactor or make changes to your app.
                    </p>
                  </span>
                ),
              },
              {
                title: 'Давуу тал',
                content: (
                  <span>
                    <p>
                      Relay's compiler aggregates and optimizes the data
                      requirements for your entire app, so that they can be
                      efficiently fetched in a single GraphQL request.
                    </p>
                    <p>
                      Relay handles the heavy lifting to ensure the data
                      declared by your components is fetched in the most
                      efficient way. For example, by deduplicating identical
                      fields, and precomputing information used at runtime,
                      among other optimizations.
                    </p>
                  </span>
                ),
              },
              {
                title: 'Бидний тухай',
                content: (
                  <span>
                    <p>
                      Relay automatically keeps all of your components up to
                      date when data that affects them changes, and efficiently
                      updates them only when strictly necessary. This means no
                      unnecessary re-renders.
                    </p>
                    <p>
                      Relay also supports executing GraphQL Mutations,
                      optionally with optimistic updates, and updates to local
                      data, while ensuring that visible data on the screen is
                      always kept up to date.
                    </p>
                  </span>
                ),
              },
            ]}
          />
        </Container>
        <Container className="exampleSection" background="dark">
          <div className="wrapperInner">
            <div className="radiusRight">
              <h2>API service -г хэрхэн ашиглах вэ ?</h2>
              <p>
                The simplest way to fetch query data is to directly call{' '}
                <LoadQueryLink />.
              </p>
              <p>
                Later, you can read the data from the store in a functional
                React component by calling the <UsePreloadedQueryLink /> hook.
              </p>
              <p>
                Relay encourages you to call <LoadQueryLink /> in response to an
                event, such as when a user presses on a link to navigate to a
                particular page or presses a button. See the guided tour section
                on <QueriesLink /> for more.
              </p>
            </div>

            <div className="radiusLeft">
              <pre className="outerPre">
                <Code>
                  {`
import React from "react";
import { graphql, usePreloadedQuery, /* ... */ } from "react-relay";

const artistsQuery = graphql\`
  query ArtistQuery($artistID: String!) {
    artist(id: $artistID) {
      name
      ...ArtistDescription_artist
    }
  }
\`;
const artistsQueryReference = loadQuery(
  environment,
  artistsQuery,
  {artistId: "1"}
);

export default function ArtistPage() {
  return (
    <EnvironmentProvider environment={environment}>
      <React.Suspense fallback={<LoadingIndicator />}>
        <ArtistView />
      </React.Suspense>
    </EnvironmentProvider>
  )
}

function ArtistView() {
  const data = usePreloadedQuery(artistsQuery, artistsQueryReference);
  return (
    <>
      <Name>{data?.artist?.name}</Name>
      {data?.artist && <ArtistCard artist={data?.artist} />}
    </>
  );
}
`}
                </Code>
              </pre>
            </div>
          </div>
        </Container>
        <Container className="exampleSection" background="light">
          <div className="wrapperInner">
            <div>
              <h2>Нэмэлт боломжууд</h2>
              <p>
                Step two is to render a tree of React components powered by
                Relay. Components use fragments to declare their data
                dependencies, and read data from the Relay store by calling{' '}
                <UseFragmentLink />.
              </p>
              <p>
                A fragment is a snippet of GraphQL that is tied to a GraphQL
                type (like <code>Artist</code>) and which specifies <i>what</i>{' '}
                data to read from an item of that type.
              </p>
              <p>
                <UseFragmentLink /> takes two parameters: a fragment literal and
                a fragment reference. A fragment reference specifies{' '}
                <i>which</i> entity to read that data from.
              </p>
              <p>
                Fragments cannot be fetched by themselves; instead, they must
                ultimately be included in a parent query. The Relay compiler
                will then ensure that the data dependencies declared in such
                fragments are fetched as part of that parent query.
              </p>
            </div>
            <div>
              <pre className="outerPre">
                <Code>
                  {`
import React from "react";
import { graphql, useFragment} from "react-relay";

export default function ArtistCard(props) {
  const {href, image, bio} = useFragment(
    graphql\`
      fragment ArtistHeader_artist on Artist {
        href
        bio
        image {
          url
        }
      }
    \`,
    props.artist
  );
  const imageUrl = image && image.url;

  return (
    <Card>
      <Link href={href}>
        <Image imageUrl={imageUrl} />
        <Bio>{bio}</Bio>
      </Link>
    </Card>
  );
}
                    `}
                </Code>
              </pre>
            </div>
          </div>
        </Container>
        
        
        
        <Container className="textSection" background="dark">
          <h2>Хамтрагч байгууллагууд</h2>
          <p>
            ХХБанкны дотооддоо хөгжүүлсэн API сервисүүдийг ашиглаж буй байгууллагууд.
          </p>
          <div>
            <div className="logosHomepage">{showcase}</div>
          </div>
          <div className="more-users">
            {/* <a className="button" href={useBaseUrl('users')}>
              More Relay Users
            </a> */}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default props => (
  <Layout>
    <Index {...props} />
  </Layout>
);
